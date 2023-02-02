import { Router } from "express";

import { createUserSchema } from "@/schemas";
import { authenticateToken, validateBody } from "@/middlewares";

import { addTrade, listTrades, updateTrade } from "@/controllers";

const tradesRouter = Router();

tradesRouter.get("/",  authenticateToken,  listTrades);
tradesRouter.post("/", authenticateToken, /* validateBody(createUserSchema), */ addTrade);
tradesRouter.put("/", authenticateToken, updateTrade);
tradesRouter.delete("/" /* validateBody(createUserSchema), usersPost */);

export { tradesRouter };
