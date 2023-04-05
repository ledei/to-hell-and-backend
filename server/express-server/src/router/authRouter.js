import express from "express";
import authController from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/auth/register", authController.registerUser);
authRouter.post("/auth/logout");
authRouter.post("/auth/login", authController.login);

export default authRouter;
