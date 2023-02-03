import { AuthenticatedRequest } from "@/middlewares";
import { strategiesService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listStrategies(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const strategies = await strategiesService.getStrategies(userId);
    res.status(httpStatus.OK).send(strategies);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function addStrategies(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  // console.log("🚀🚀🚀 ~ file: strategies-controller.ts:18 ~ addStrategies ~ userId", userId);

  const body = req.body;
  // console.log("🚀🚀🚀 ~ file: strategies-controller.ts:21 ~ addStrategies ~ body", body);
  try {
    const strategies = await strategiesService.postStrategy(body, userId);
    res.status(httpStatus.OK).send(strategies);
  } catch (error) {
    if (error.name === "strategyAlreadyExistsError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
