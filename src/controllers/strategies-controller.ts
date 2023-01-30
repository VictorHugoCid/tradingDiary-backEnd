import { strategiesService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listStrategies(req: Request, res: Response) {
  const userId = req.body;

  try {
    const strategies = await strategiesService.getStrategies(userId);
    res.status(httpStatus.OK).send(strategies);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
