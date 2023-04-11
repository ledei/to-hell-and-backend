import { Server } from "socket.io";
import jwtUtils from "../utils/jwtUtils.js";
import { error } from "console";

const options = {
  cors: {
    origin: "*",
  },
};

let io = undefined;
let clients = [];

function handleConnectAndDisconnect(socket) {
  let username = undefined;
  try {
    const claims = jwtUtils.userVerification(socket);
    username = claims.username;
  } catch (err) {
    console.log(socket.id, err.serverMessage);
  }

  if (username in clients == false && username != undefined) {
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
