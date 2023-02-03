import { Prisma, PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
// import createTicketType from "./seed-TicketType";
// import createRemotePaid from "./seed-remote-paid";
// import createRemoteReserved from "./seed-remote-reserved";
// import createActivities from "./seed-activities";
const prisma = new PrismaClient();

async function main() {

    const trades = await prisma.trades.createMany({
      data:[{
        entryPrice: 109095,
        exitPrice: 109345,
        day: "2023-01-06T03:00:00.000Z",
        entryTime: '09:20',
        exitTime: '09:31',
        stock: 'win',
        amount: 6,
        buyOrSell: 'buy',
        userId: 1,
        isGain: true,
        value: 300,
        points: 250,
        strategyId: 1
      }
      ,
      {
        entryPrice: 113425,
        exitPrice: 113275,
        day: "2023-01-12T03:00:00.000Z",
        entryTime: '09:53',
        exitTime: '09:58',
        stock: 'win',
        amount: 4,
        buyOrSell: 'buy',
        userId: 1,
        isGain: true,
        value: 120,
        points: 150,
        strategyId: 1
      },
      
      {
        entryPrice: 110430,
        exitPrice: 110770,
        day: "2023-01-17T03:00:00.000Z",
        entryTime: '09:58',
        exitTime: '10:06',
        stock: 'win',
        amount: 3,
        buyOrSell: 'buy',
        userId: 1,
        isGain: true,
        value: 204,
        points: 340,
        strategyId: 1
      },
      {
        entryPrice: 113880,
        exitPrice: 113735,
        day: "2023-01-20T03:00:00.000Z",
        entryTime: '09:16',
        exitTime: '09:18',
        stock: 'win',
        amount: 4,
        buyOrSell: 'buy',
        userId: 1,
        isGain: false,
        value: 116,
        points: 145,
        strategyId: 1
      },
      {
        entryPrice: 112945,
        exitPrice: 112695,
        day: "2023-01-23T03:00:00.000Z",
        entryTime: '09:19',
        exitTime: '09:27',
        stock: 'win',
        amount: 3,
        buyOrSell: 'sell',
        userId: 1,
        isGain: true,
        value: 150,
        points: 250,
        strategyId: 1
      },
      {
        entryPrice: 5409,
        exitPrice: 5395,
        day: "2023-01-03T03:00:00.000Z",
        entryTime: '09:22',
        exitTime: '09:29',
        stock: 'wdo',
        amount: 2,
        buyOrSell: 'sell',
        userId: 1,
        isGain: true,
        value: 280,
        points: 14,
        strategyId: 1
      },
      {
        entryPrice: 20.22,
        exitPrice: 20.38,
        day: "2023-01-15T03:00:00.000Z",
        entryTime: '10:09',
        exitTime: '10:12',
        stock: 'JBSS3',
        amount: 200,
        buyOrSell: 'sell',
        userId: 1,
        isGain: false,
        value: 32,
        points: 0.16,
        strategyId: 1
      },
      {
        entryPrice: 34.21,
        exitPrice: 34.08,
        day: "2023-01-06T03:00:00.000Z",
        entryTime: '10:09',
        exitTime: '10:10',
        stock: 'PRIO3',
        amount: 200,
        buyOrSell: 'buy',
        userId: 1,
        isGain: false,
        value: 26,
        points: 0.13,
        strategyId: 1
      }
    ]
    })



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
