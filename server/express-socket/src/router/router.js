import express from "express";
import broadcastController from "../controller/broadcastController.js";

const router = express.Router();

router.post("/broadcast", broadcastController.sendBroadcast);

export default router;
