import {
  createRoom,
  findRoom,
  getRoom,
  updateRoom,
  updateUserChannel,
} from "../service/chatAppService.js";

async function createChannel(req, res) {
  const room = {
    name: req.body.name,
    owner: req.user.username,
    msg: [],
  };

  const existingRoom = await findRoom(room.name);
  if (existingRoom == null) {
    room.date = new Date();
    const newRoom = await createRoom(room);

    const userData = {
      username: req.user.username,
      channelId: newRoom.insertedId,
    };
    const addNewChannel = await updateUserChannel(userData);
    res.send(addNewChannel);
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
      date: new Date(),
    },
  };

  const sendMsg = await updateRoom(data);
  res.send(sendMsg);
}

async function getChannel(req, res) {
  const channel = await getRoom(req.params.id);

  res.send(channel);
}

export default { createChannel, sendChannelMsg, getChannel };
