import express from "express";
import broadcastController from "../controller/broadcastController";

const broadcast = express.Router();

broadcast.post("/broadcast", broadcastController.broadcastMsg);

export default broadcast;
