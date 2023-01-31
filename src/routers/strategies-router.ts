import { Router } from "express";

// import { createUserSchema } from "@/schemas";
// import { validateBody } from "@/middlewares";
// import { usersPost } from "@/controllers";

const strategiesRouter = Router();

strategiesRouter.get("/strategies", /* validateBody(createUserSchema), usersPost */);
strategiesRouter.post("/strategies", /* validateBody(createUserSchema), usersPost */);
strategiesRouter.put("/strategies", /* validateBody(createUserSchema), usersPost */);
strategiesRouter.delete("/strategies", /* validateBody(createUserSchema), usersPost */);

export { strategiesRouter };
