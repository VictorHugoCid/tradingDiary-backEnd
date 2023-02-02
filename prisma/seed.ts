import { Prisma, PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
// import createTicketType from "./seed-TicketType";
// import createRemotePaid from "./seed-remote-paid";
// import createRemoteReserved from "./seed-remote-reserved";
// import createActivities from "./seed-activities";
const prisma = new PrismaClient();

async function main() {

    // const trades = await prisma.trades.createMany({
    //   data:[{
    //     entryPrice: 5120,
    //     exitPrice: 5132.5,
    //     day: "2023-01-02T03:00:00.000Z",
    //     entryTime: '09:15',
    //     exitTime: '09:40',
    //     stock: 'wdo',
    //     amount: 2,
    //     buyOrSell: 'buy',
    //     userId: 1,
    //     isGain: true,
    //     value: 250,
    //     points: 12.5,
    //     strategyId: 1
    //   }
    //   ,
    //   {
    //     entryPrice: 5120,
    //     exitPrice: 5132.5,
    //     day: "2023-01-02T03:00:00.000Z",
    //     entryTime: '09:15',
    //     exitTime: '09:40',
    //     stock: 'wdo',
    //     amount: 2,
    //     buyOrSell: 'buy',
    //     userId: 1,
    //     isGain: true,
    //     value: 250,
    //     points: 12.5,
    //     strategyId: 1
    //   }]
    // })



    // console.log( trades );
  }

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
