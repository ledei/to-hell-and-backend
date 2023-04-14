import {
  createBroadcastMsg,
  getBroadcastChannel,
} from "../service/chatAppService.js";
import { fetchOptions } from "../util/fetchOptions.js";
import jwtUtils from "../util/jwtUtils.js";

async function broadcastMsg(req, res) {
  const msg = {
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  };

  if (req.user.role == "admin") {
    const serverAccessToken = jwtUtils.generateServerToken();
    await createBroadcastMsg(msg);
    await fetchOptions(
      "http://127.0.0.1:3000/broadcast",
      msg,
      serverAccessToken
    );
    res.status(201).send(msg);
  } else {
    return res.status(401).send("unauthorized");
  }
}

async function getBroadcastHistory(req, res) {
  const history = await getBroadcastChannel();

  res.send(history);
}

export default { getBroadcastHistory, broadcastMsg };
