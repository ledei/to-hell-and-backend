import express from "express";
import broadcastController from "../controller/broadcastController.js";
import channelController from "../controller/channelController.js";

const router = express.Router();

router.post("/broadcast", broadcastController.sendBroadcast);
router.post("/channels", channelController.updateChannelList);

export default router;
