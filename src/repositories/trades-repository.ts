import { prisma } from "@/config";
import { Trades } from "@prisma/client";

export async function create(data: any): Promise<Trades> {
  return await prisma.trades.create({
    data: data,
  });
}

export async function findAll(): Promise<Trades[]> {
  // acho q a Promise nao é void
  return await prisma.trades.findMany();
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
  findAll,
  deleteTrade,
  // update
};

export { tradesRepository };
