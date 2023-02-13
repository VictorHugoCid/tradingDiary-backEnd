import { AuthenticatedRequest } from "@/middlewares";
import { strategiesService } from "@/services";
import { Response } from "express";
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

  const body = req.body;
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

export async function deleteStrategy(req: AuthenticatedRequest, res: Response) {
  const { id } = req.query;

  try {
    const strategy = await strategiesService.deleteStrategy(Number(id));
    res.status(httpStatus.OK).send("Ok");
  } catch (error) {
    if (error.name === "strategyAlreadyExistsError") {
      return res.status(httpStatus.CONFLICT).send("Essa estratégia está sendo usada em um trade");
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
