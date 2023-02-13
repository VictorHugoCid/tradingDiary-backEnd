import { addStrategies, listStrategies, deleteStrategy } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

// import { createUserSchema } from "@/schemas";
// import { validateBody } from "@/middlewares";

const strategiesRouter = Router();

strategiesRouter.get("/", authenticateToken, listStrategies);
strategiesRouter.post("/", authenticateToken, addStrategies);
strategiesRouter.put("/", /* validateBody(createUserSchema), usersPost */);
strategiesRouter.delete("/", deleteStrategy );

export { strategiesRouter };
