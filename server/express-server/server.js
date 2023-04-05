import express from "express";
import cors from "cors";

const app = express();
const port = 3030;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  console.log("server is running on port " + port);
});
