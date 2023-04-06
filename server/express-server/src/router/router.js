import express from "express";
import chatAppController from "../controller/chatAppController.js";

const router = express.Router();

router.put("/channel", chatAppController.createChannel);

export default router;
