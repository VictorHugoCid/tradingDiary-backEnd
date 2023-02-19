// import { prisma } from "@prisma/client";
import { prisma } from "@/config";
import { newStrategyData, strategyData } from "@/protocols";
import { Strategies } from "@prisma/client";
import { CLIENT_RENEG_LIMIT } from "tls";

export async function findStrategies(userId: number): Promise<Strategies[]> {
  const strategies = await prisma.strategies.findMany({
    where: {
      userId,
    },
    orderBy: {
      id: "asc",
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
  const strategy = await prisma.trades.findFirst({
    where: {
      strategyId: id,
    },
  });

  return strategy;
}

export async function createStrategy(data: newStrategyData, userId: number): Promise<Strategies> {
  const strategy = await prisma.strategies.create({
    data: {
      name: data.name.toLowerCase(),
      description: data.description.toLowerCase(),
      userId,
    },
  });

  return strategy;
}

export async function update(data: strategyData): Promise<Strategies> {
  const strategy = await prisma.strategies.update({
    where: {
      id: data.id,
    },
    data,
  });
  console.log("🚀🚀🚀 ~ file: strategies-repository.ts:56 ~ update ~ strategy", strategy);

  return strategy;
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
