import jwtUtils from "../util/jwtUtils.js";

function authorization(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (authHeader == undefined) {
    res.status(400).send("Authorization header is missing");
  } else {
    const token = authHeader.replace("Bearer ", "");
    try {
      const payload = jwtUtils.verify(token);
      req.user = payload;
      next();
    } catch (err) {
      console.log(err);
      console.log(req.ip, err.serverMessage);

      res.status(403).send(err.clientMessage);
    }
  }
}
export default { authorization };
