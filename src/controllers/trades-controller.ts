import httpStatus from "http-status";
import { Request, Response } from "express";
import { tradeService } from "@/services/trades-service";
import { AuthenticatedRequest } from "@/middlewares";

export async function listTrades(req: Request, res: Response) {
  const userId = req;
  const body = req.body;

  try {
    await tradeService.getTrades();
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function addTrade(req: AuthenticatedRequest, res: Response) {
  const tradeFront = req.body;
  const { userId } = req;

  const trade = { ...tradeFront, userId };

  try {
    await tradeService.postTrade(trade);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function updateTrade(req: Request, res: Response) {
  // const trade = req.body;
  const userId = req;

  const trade = {
    buyOrSell: "Buy",
    userId: 1,
    day: "23/01 09:32",
    stock: "win",
    amount: 1,
    strategy: "VWAP",
    entryPrice: 112150,
    exitPrice: 112300,
    entryTime: "112150",
    exitTime: "112300",
  };
  //adiconar o userId aqui

  try {
    await tradeService.putTrade(trade);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
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
