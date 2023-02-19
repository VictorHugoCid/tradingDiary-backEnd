import { addStrategy, listStrategies, deleteStrategy, updateStrategy } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

// import { createUserSchema } from "@/schemas";
// import { validateBody } from "@/middlewares";

const strategiesRouter = Router();

strategiesRouter.get("/", authenticateToken, listStrategies);
strategiesRouter.post("/", authenticateToken, addStrategy);
strategiesRouter.put("/", authenticateToken, updateStrategy);
strategiesRouter.delete("/", deleteStrategy );

export { strategiesRouter };
