import { Server } from "socket.io";
import jwtUtils from "../utils/jwtUtils.js";

const options = {
  cors: {
    origin: "*",
  },
};

let io = undefined;
let clients = [];

function handleConnections(socket) {
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

  socket.on("join-room", (room) => {
    socket.join(room);
  });
}

function broadcast(channel, message) {
  io.emit(channel, message);
}

function sendToRoom(room, channel, message) {
  io.to(room).emit(channel, message);
}

function attach(container) {
  io = new Server(container, options);
  io.on("connection", handleConnections);
}

export default { broadcast, attach, sendToRoom };
