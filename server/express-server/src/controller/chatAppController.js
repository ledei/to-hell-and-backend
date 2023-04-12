import {
  createRoom,
  deleteRoom,
  findRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../service/chatAppService.js";
import { fetchOptions } from "../util/fetchOptions.js";
import jwtUtils from "../util/jwtUtils.js";

async function createChannel(req, res) {
  const room = {
    name: req.body.name,
    owner: req.user.username,
    msg: [],
  };

  const existingRoom = await findRoom(room.name);
  if (existingRoom == null) {
    room.created = new Date();
    await createRoom(room);
    const serverAccessToken = jwtUtils.generateServerToken();
    await fetchOptions(
      "http://127.0.0.1:3000/channels",
      room,
      serverAccessToken
    );
    res.status(201).send(room);
  } else {
    res.status(400);
    res.send("room name already exist");
  }
}

async function sendChannelMsg(req, res) {
  const data = {
    id: req.params.id,
    msg: {
      author: req.user.username,
      content: req.body.msg,
      sent: new Date(),
    },
  };

  const serverAccessToken = jwtUtils.generateServerToken();
  await fetchOptions("http://127.0.0.1:3000/room", data, serverAccessToken);

  await updateRoom(data);
  res.status(201).send(data);
}

async function getChannel(req, res) {
  const channel = await getRoom(req.params.id);

  res.send(channel);
}

async function getAllChannels(req, res) {
  const channels = await getAllRooms();

  res.send(channels);
}

async function deleteChannel(req, res) {
  const channel = await getRoom(req.params.id);

  if (channel.owner == req.user.username) {
    const deleted = await deleteRoom(req.params.id);

    res.send(deleted);
  } else {
    return res.status(401).send("unauthorized");
  }
}

export default {
  createChannel,
  sendChannelMsg,
  getChannel,
  getAllChannels,
  deleteChannel,
};
