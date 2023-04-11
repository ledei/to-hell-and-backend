import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function userVerification(socket) {
  const authHeader = socket.handshake.headers.authorization;
  if (authHeader == undefined) {
    res.status(400).send("Authorization header is missing");
  } else {
    const token = authHeader && authHeader.replace("Bearer ", "");
    try {
      return jwt.verify(token, process.env.PUBLIC_JWT_KEY);
    } catch (err) {
      let verfError = new Error(); //custom verification error

      if (err.name == "JsonWebTokenError") {
        verfError.clientMessage =
          "Digital signing is invalid, request new token";
        verfError.serverMessage = "Token verification failed";
      }

      if (err.name == "TokenExpiredError") {
        verfError.clientMessage =
          "Digital signing is invalid, request new token";
        verfError.serverMessage = "Token expired";
      }

      throw verfError;
    }
  }
}

//    jwt.verify(token, process.env.PUBLIC_JWT_KEY, (err, payload) => {
//     if (err) {
//       let verfError = new Error();

//       if (err.name == "JsonWebTokenError") {
//         verfError.clientMessage =
//           "Digital signing is invalid, request new token";
//         verfError.serverMessage = "Token verification failed";
//       }

//       if (err.name == "TokenExpiredError") {
//         verfError.clientMessage =
//           "Digital signing is invalid, request new token";
//         verfError.serverMessage = "Token expired";
//       }

//       throw verfError;
//     }

//     return payload;
//   });
// }

export default { userVerification };
