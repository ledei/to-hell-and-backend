import socketService from "../service/socketService.js";
import jwtUtils from "../utils/jwtUtils.js";

function updateChannelList(req, res) {
  let subject = undefined;
  try {
    const claims = jwtUtils.serverVerification(req);
    subject = claims.sub;
  } catch (err) {
    console.log(req.ip, err.serverMessage);
  }

  if (!subject == "server-communication" || subject == undefined)
    return "Wrong subject for intended action", 401;
  socketService.broadcast("channels", req.body);

  res.sendStatus(200);
}

export default { updateChannelList };
