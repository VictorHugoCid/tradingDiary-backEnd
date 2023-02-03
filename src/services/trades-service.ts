import { dateRange, TradeData } from "@/protocols";
import { strategiesRepository, tradesRepository } from "@/repositories";
import { isGainOrLoss, stockValues } from "@/utils";
import dayjs from "dayjs";

export async function postTrade(data: TradeData) {
  const trade = data;

  const isGain = isGainOrLoss(trade.entryPrice, trade.exitPrice, trade.buyOrSell);
  const value = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).value;
  const points = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).points;

  const strategyId = await strategyAlredyExist(trade);
  const newTrade = {
    ...data,
    isGain,
    value,
    points,
    strategyId,
    day: dayjs(trade.day).toDate(),
    entryPrice: Number(trade.entryPrice),
    exitPrice: Number(trade.exitPrice),
    amount: Number(trade.amount),
  };

  delete newTrade.strategy;

  return await tradesRepository.create(newTrade);
}

export async function putTrade(data: TradeData) {
  const trade = data;

  let newTrade = {};

  const isGain = isGainOrLoss(trade.entryPrice, trade.exitPrice, trade.buyOrSell);
  const value = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).value;
  const points = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).points;
  //verificas se existe estratégia ou nao
  const strategyId = strategiesRepository.findStrategyByName(trade.strategy);

  newTrade = { ...data, isGain, value, points, strategyId };
  await tradesRepository.create(newTrade);
}

export async function deleteTrade(tradeId: number) {
  await tradesRepository.deleteTrade(tradeId);
}

export async function getTrades(body: dateRange, userId: number) {
  const trades = await tradesRepository.findMany(body, userId);
  return trades;
}

export async function strategyAlredyExist(trade: TradeData) {
  const strategy = await strategiesRepository.findStrategyByName(trade.strategy);

  if (strategy) {
    const strategyId = strategy.id;

    return strategyId;
  }
  const userId = trade.userId;
  const newStrategy = await strategiesRepository.createStrategy(
    {
      name: trade.strategy.toLowerCase(),
      description: "",
    },
    userId,
  );

  return newStrategy.id;
}

const tradeService = {
  postTrade,
  getTrades,
  deleteTrade,
  putTrade,
};

export { tradeService };
