import express from "express";

const broadcast = express.Router();

broadcast.post("/broadcast");

export default broadcast;
