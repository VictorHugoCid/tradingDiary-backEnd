// import { prisma } from "@prisma/client";
import { prisma } from "@/config";
import { Strategies } from "@prisma/client";

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

export async function createStrategy(data: any): Promise<Strategies> {
  console.log("🚀🚀🚀 ~ file: strategies-repository.ts:26 ~ createStrategy ~ data", data);
  const strategy = await prisma.strategies.create({
    data,
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

const strategiesRepository = {
  findStrategyByName,
  findStrategies,
  createStrategy,
  update,
};

export { strategiesRepository };
