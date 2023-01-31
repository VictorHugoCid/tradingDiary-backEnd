import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "@/config";

loadEnv();

import { authenticationRouter, strategiesRouter, tradesRouter, userRouter } from "@/routers";
import { handleApplicationErrors } from "./middlewares";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use("/auth", authenticationRouter)
  .use("/users", userRouter)
  .use("/trades", tradesRouter)
  .use("/strategies", strategiesRouter);
// .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
