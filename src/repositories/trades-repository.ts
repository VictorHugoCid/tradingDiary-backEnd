import { prisma } from "@/config";
import { dateRange } from "@/protocols";
import { Trades } from "@prisma/client";

export async function create(data: any): Promise<Trades> {
  return await prisma.trades.create({
    data,
  });
}

export async function findMany(body: dateRange, userId: number): Promise<Trades[]> {
  const trades = await prisma.trades.findMany({
    where: {
      userId,
      day: {
        gte: body.startDate,
        lte: body.endDate,
      },
    },
    orderBy: {
      day: "asc",
      entryTime: "asc",
    },
  });

  return trades;
}

export async function deleteTrade(tradeId: number): Promise<Trades> {
  // acho q nao é void - tem q ter o return
  return await prisma.trades.delete({
    where: {
      id: tradeId,
    },
  });
}

const tradesRepository = {
  create,
  findMany,
  deleteTrade,
  // update
};

export { tradesRepository };
