import {
  createRoom,
  findRoom,
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

export default { createChannel };
