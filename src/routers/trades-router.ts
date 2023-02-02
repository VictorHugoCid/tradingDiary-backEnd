import { Router } from "express";

import { createUserSchema } from "@/schemas";
import { authenticateToken, validateBody } from "@/middlewares";

import { addTrade } from "@/controllers";

const tradesRouter = Router();

tradesRouter.get("/" /* validateBody(createUserSchema), usersPost */);
tradesRouter.post("/", authenticateToken, /* validateBody(createUserSchema), */ addTrade);
tradesRouter.put("/" /* validateBody(createUserSchema), usersPost */);
tradesRouter.delete("/" /* validateBody(createUserSchema), usersPost */);

export { tradesRouter };
