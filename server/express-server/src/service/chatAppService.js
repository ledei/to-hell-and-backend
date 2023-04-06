import { ObjectId } from "mongodb";
import { fetchCollection } from "../mongodb/mongoClient.js";

export function createRoom(quary) {
  return fetchCollection("channel").insertOne(quary);
}

export function findRoom(name) {
  const roomName = { name: name };
  return fetchCollection("channel").findOne(roomName);
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

export function findUser(username) {
  return fetchCollection("user").findOne({ username: username });
}

export function createUser(quary) {
  return fetchCollection("user").insertOne(quary);
}
