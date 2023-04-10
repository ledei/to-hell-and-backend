import express from "express";
import chatAppController from "../controller/chatAppController.js";
import broadcastController from "../controller/broadcastController.js";

const router = express.Router();

router.put("/channel", chatAppController.createChannel);
router.post("/channel/:id", chatAppController.sendChannelMsg);
router.get("/channel/:id", chatAppController.getChannel);
router.get("/channel", chatAppController.getAllChannels);
router.get("/broadcast", broadcastController.getBroadcastHistory);
router.post("/broadcast", broadcastController.broadcastMsg);
router.delete("/channel/:id", chatAppController.deleteChannel);

export default router;
