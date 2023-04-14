import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function generateServerToken() {
  let payloadOptions = {
    issuer: "express-server",
    subject: "server-communication",
    expiresIn: "30min",
    algorithm: "RS256",
  };

  let token = jwt.sign({}, process.env.PRIVATE_JWT_KEY, payloadOptions);

  return token;
}

function generateToken(data) {
  let payloadOptions = {
    issuer: "chat-app",
    subject: "send and receive access token",
    expiresIn: "15m",
    algorithm: "RS256",
  };

  let payload = {
    username: data.username,
    role: data.role,
  };

  let token = jwt.sign(payload, process.env.PRIVATE_JWT_KEY, payloadOptions);

  return token;
}

function verify(token) {
  return jwt.verify(token, process.env.PUBLIC_JWT_KEY, (err, payload) => {
    if (err) {
      let verfError = new Error();

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

    return payload;
  });
}

export default { generateToken, verify, generateServerToken };
