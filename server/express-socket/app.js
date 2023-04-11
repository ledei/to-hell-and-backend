import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const ioOptions = {
  cors: {
    origin: "*",
  },
};

const app = express();
const httpServer = createServer(app);
const socketIo = new Server(httpServer, ioOptions);
const port = 3000;

httpServer.listen(port, () => console.log("app started on " + port));
