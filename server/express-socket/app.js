import express from "express";
import { createServer } from "http";
import SocketService from "./src/service/socketService.js";
import router from "./src/router/router.js";

const app = express();
const httpServer = createServer(app);
const port = 3000;

app.use(express.json());

SocketService.attach(httpServer);

app.use(router);

httpServer.listen(port, () => console.log("app started on " + port));
