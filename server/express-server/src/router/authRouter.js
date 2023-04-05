import express from "express";

const authRouter = express.Router();

authRouter.post("/auth/create");
authRouter.post("/auth/logout");
authRouter.post("/auth/login");

export default authRouter;
