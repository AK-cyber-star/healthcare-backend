import { ValidationError } from "sequelize";
import env from "../config/env.js";

const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  // Basic error and Sequilize errors
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err instanceof ValidationError) {
    statusCode = 400;
    message = err.errors.map((e) => e.message).join(", ");
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    statusCode = 400;
    message =
      "Duplicate field value: " + err.errors.map((e) => e.message).join(", ");
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(env.app.nodeEnv === "development" && { stack: err.stack }),
  });
};

export default errorMiddleware;
