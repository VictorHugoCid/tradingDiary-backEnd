import httpStatus from "http-status";
import { Request, Response } from "express";
import { tradeService } from "@/services/trades-service";
import { AuthenticatedRequest } from "@/middlewares";
import dayjs, { Dayjs } from "dayjs";

export async function listTrades(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const startDate = dayjs(req.query.startDate.toString()).toDate();
  console.log("🚀🚀🚀 ~ file: trades-controller.ts:10 ~ listTrades ~ req.query.startDate.", req.query.startDate);
  const endDate = dayjs(req.query.endDate.toString()).toDate();
  const body = {
    startDate,
    endDate,
  };

  console.log("🚀🚀🚀 ~ file: trades-controller.ts:12 ~ listTrades ~ body", body);

  try {
    const trades = await tradeService.getTrades(body, userId);
    console.log("🚀🚀🚀 ~ file: trades-controller.ts:18 ~ listTrades ~ trades", trades);
    return res.send(trades).status(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function addTrade(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  console.log("🚀🚀🚀 ~ file: trades-controller.ts:22 ~ addTrade ~ userId", userId);
  const tradeFront = req.body;
  console.log("🚀🚀🚀 ~ file: trades-controller.ts:21 ~ addTrade ~ tradeFront", tradeFront);

  const trade = { ...tradeFront, userId };

  try {
    await tradeService.postTrade(trade);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function updateTrade(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  console.log(req.params);

  const trade = req.body;

  // const trade = {
  //   buyOrSell: "Buy",
  //   userId: 1,
  //   day: "23/01 09:32",
  //   stock: "win",
  //   amount: 1,
  //   strategy: "VWAP",
  //   entryPrice: 112150,
  //   exitPrice: 112300,
  //   entryTime: "112150",
  //   exitTime: "112300",
  // };
  // //adiconar o userId aqui

  // try {
  //   await tradeService.putTrade(trade);
  //   return res.sendStatus(httpStatus.OK);
  // } catch (error) {
  //   return res.status(httpStatus.BAD_REQUEST).send(error);
  // }
}

export async function deleteTrade(req: Request, res: Response) {
  const trade = req.body;
  const userId = req;

  const tradeId = trade.id;
  try {
    await tradeService.deleteTrade(tradeId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
