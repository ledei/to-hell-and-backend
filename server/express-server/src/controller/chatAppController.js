import { createRoom, findRoom } from "../service/chatAppService.js";

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

    res.send(newRoom);
  }
}

export default { createChannel };
