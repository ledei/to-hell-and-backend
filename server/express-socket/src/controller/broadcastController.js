import socketService from "../service/socketService.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function sendBroadcast(req, res) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.replace("Bearer ", "");
  const claims = jwt.verify(token, process.env.PUBLIC_JWT_KEY);
  const subject = claims.sub;

  if (!subject == "server-communication")
    return "Wrong subject for intended action", 401;
  socketService.broadcast("broadcast", req.body);

  res.sendStatus(200);
}

export default { sendBroadcast };
