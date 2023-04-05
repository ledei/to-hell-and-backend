import { findUser } from "../service/chatAppService.js";
import jwtUtils from "../util/jwtUtil.js";

async function login(req, res) {
  let user = req.body;
  if (user.username == "" || user.password == "") {
    res.status(400).send("Missing authentication details");
  } else {
    const fetchUser = await findUser(user.username);
    if (fetchUser == null) {
      res.status(404).json("user not found");
    } else if (
      fetchUser.username == user.username &&
      fetchUser.password == user.password
    ) {
      const token = jwtUtils.generate(fetchUser);

      res.status(200);
      res.send(token);
    } else {
      res.status(400).send("Missing authentication details");
    }
  }
}

export default { login };
