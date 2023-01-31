import { Router } from "express";

// import { createUserSchema } from "@/schemas";
// import { validateBody } from "@/middlewares";
// import { usersPost } from "@/controllers";

const tradesRouter = Router();

tradesRouter.get("/strategies", /* validateBody(createUserSchema), usersPost */);
tradesRouter.post("/strategies", /* validateBody(createUserSchema), usersPost */);
tradesRouter.put("/strategies", /* validateBody(createUserSchema), usersPost */);
tradesRouter.delete("/strategies", /* validateBody(createUserSchema), usersPost */);

export { tradesRouter };
