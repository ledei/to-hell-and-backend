import { ObjectId } from "mongodb";
import { fetchCollection } from "../mongodb/mongoClient";

export function createRoom(quary) {
  return fetchCollection("channel").insertOne(quary);
}

export function getRoom(id) {
  const roomId = { _id: new ObjectId(id) };
  return fetchCollection("channel").findOne(roomId);
}

export function updateRoom(quary) {
  const roomId = { _id: new ObjectId(quary.id) };
  const data = { $push: { msg: quary.msg } };
  return fetchCollection("channel").updateOne(roomId, data);
}

export function deleteRoom(id) {
  const roomId = { _id: new ObjectId(id) };
  return fetchCollection("channel").deleteOne(roomId);
}
