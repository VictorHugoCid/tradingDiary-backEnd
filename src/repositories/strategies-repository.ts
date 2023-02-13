// import { prisma } from "@prisma/client";
import { prisma } from "@/config";
import { strategyData } from "@/protocols";
import { Strategies } from "@prisma/client";
import { CLIENT_RENEG_LIMIT } from "tls";

export async function findStrategies(userId: number): Promise<Strategies[]> {
  const strategies = await prisma.strategies.findMany({
    where: {
      userId,
    },
  });

  return strategies;
}

export async function findStrategyByName(name: string) {
  const strategy = await prisma.strategies.findFirst({
    where: {
      name,
    },
  });

  return strategy;
}

export async function findStrategyById(id: number) {
  console.log("🚀🚀🚀 ~ file: strategies-repository.ts:28 ~ findStrategyById ~ id", id);

  const strategy = await prisma.trades.findFirst({
    where: {
      strategyId: id,
    },
  });
  console.log("🚀🚀🚀 ~ file: strategies-repository.ts:35 ~ findStrategyById ~ strategy", strategy);

  return strategy;
}

export async function createStrategy(data: strategyData, userId: number): Promise<Strategies> {
  const strategy = await prisma.strategies.create({
    data: {
      name: data.name.toLowerCase(),
      description: data.description.toLowerCase(),
      userId,
    },
  });

  return strategy;
}

export async function update(data: any): Promise<Strategies> {
  const strategies = await prisma.strategies.update({
    where: {
      id: data.strategyId,
    },
    data,
  });

  return strategies;
}

export async function deleteStrategy(id: number) {
  const strategies = await prisma.strategies.delete({
    where: {
      id,
    },
  });

  return;
}

const strategiesRepository = {
  findStrategyByName,
  findStrategies,
  createStrategy,
  update,
  deleteStrategy,
  findStrategyById,
};

export { strategiesRepository };
