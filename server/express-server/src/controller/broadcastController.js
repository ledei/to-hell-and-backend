import {
  createBroadcastMsg,
  getBroadcastChannel,
} from "../service/chatAppService";

async function broadcastMsg(req, res) {
  const msg = {
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  };

  const sendMsg = createBroadcastMsg(msg);
  res.status(201).send(sendMsg);
}

async function getBroadcastHistory(req, res) {
  const history = await getBroadcastChannel();

  res.send(history);
}

export default { getBroadcastHistory, broadcastMsg };
