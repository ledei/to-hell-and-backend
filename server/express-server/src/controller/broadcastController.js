import {
  createBroadcastMsg,
  getBroadcastChannel,
} from "../service/chatAppService.js";

async function broadcastMsg(req, res) {
  const msg = {
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  };

  if (req.user.role == "admin") {
    const sendMsg = createBroadcastMsg(msg);
    res.status(201).send(sendMsg);
  } else {
    return res.status(401).send("unauthorized");
  }
}

async function getBroadcastHistory(req, res) {
  const history = await getBroadcastChannel();

  res.send(history);
}

export default { getBroadcastHistory, broadcastMsg };
