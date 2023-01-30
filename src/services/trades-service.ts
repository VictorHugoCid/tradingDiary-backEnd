import { TradeData } from "@/protocols";
import { strategiesRepository, tradesRepository } from "@/repositories";
import { calcDol, calcIndexBr, calcStocks, isGainOrLoss, stockValues } from "@/utils";

export async function postTrade(data: TradeData) {
  const trade = data;

  let newTrade = {};

  const isGain = isGainOrLoss(trade.entryPrice, trade.exitPrice, trade.buyOrSell);
  const value = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).value;
  const points = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).points;
  const strategyId = strategiesRepository.findStrategyByName(trade.strategy);

  newTrade = { ...data, isGain, value, points, strategyId };
  await tradesRepository.create(newTrade);
}

export async function putTrade(data: TradeData) {
  const trade = data;

  let newTrade = {};

  const isGain = isGainOrLoss(trade.entryPrice, trade.exitPrice, trade.buyOrSell);
  const value = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).value;
  const points = stockValues(trade.stock, trade.entryPrice, trade.exitPrice, trade.amount).points;
  const strategyId = strategiesRepository.findStrategyByName(trade.strategy);

  newTrade = { ...data, isGain, value, points, strategyId };
  await tradesRepository.create(newTrade);
}

export async function deleteTrade(tradeId: number) {
  await tradesRepository.deleteTrade(tradeId);
}

export async function getTrades() {
  await tradesRepository.findAll;
}

const tradeService = {
  postTrade,
  getTrades,
  deleteTrade,
  putTrade,
};

export { tradeService };
