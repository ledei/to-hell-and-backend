import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const options = {
  cors: {
    origin: "*",
  },
};

let io = undefined;
let clients = [];

function handleConnectAndDisconnect(socket) {
  const authHeader = socket.handshake.headers.authorization;
  const token = authHeader && authHeader.replace("Bearer ", "");
  const jwtData = jwt.verify(token, process.env.PUBLIC_JWT_KEY);
  const username = jwtData.username;
  if (username in clients == false) {
    clients[username] = [];
    console.log("new user connected");
    clients[username].push(socket.id);
    console.log(clients);
  }

  socket.on("disconnect", () => {
    console.log("A user disconnected");
    console.log(username);
    delete clients[username];
    console.log(clients);
  });
}

function broadcast(channel, message) {
  io.emit(channel, message);
}

function attach(container) {
  io = new Server(container, options);
  io.on("connection", handleConnectAndDisconnect);
}

export default { broadcast, attach };
