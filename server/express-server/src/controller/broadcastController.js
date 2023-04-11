import {
  createBroadcastMsg,
  getBroadcastChannel,
} from "../service/chatAppService.js";
import jwtUtils from "../util/jwtUtils.js";

async function broadcastMsg(req, res) {
  const msg = {
    title: req.body.title,
    content: req.body.content,
    date: new Date(),
  };

  if (req.user.role == "admin") {
    const serverAccessToken = jwtUtils.generateServerToken();
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify(msg),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + serverAccessToken,
      },
    };
    await createBroadcastMsg(msg);
    await fetch("http://127.0.0.1:3000/broadcast", fetchOptions);
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
