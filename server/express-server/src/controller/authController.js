import { createUser, findUser } from "../service/chatAppService.js";
import jwtUtils from "../util/jwtUtils.js";

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
      const token = jwtUtils.generateToken(fetchUser);

      res.status(200);
      res.send(token);
    } else {
      res.status(400).send("Missing authentication details");
    }
  }
}

async function registerUser(req, res) {
  let UserDetails = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    role: "user",
  };
  if (UserDetails.email == "" || UserDetails.password == "") {
    res.status(400);
    res.send("Missing user details");
  } else {
    const registered = await findUser(UserDetails.username);

    if (registered == null) {
      const newUser = await createUser(UserDetails);
      if (newUser.acknowledged == true) {
        const token = jwtUtils.generateToken(UserDetails);
        res.status(201);
        res.send(token);
      } else {
        res.send("error");
      }
    } else {
      res.status(400);
      res.send("This user already exist");
    }
  }
}

export default { login, registerUser };
