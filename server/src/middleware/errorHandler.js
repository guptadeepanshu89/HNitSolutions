const { failure } = require("../utils/apiResponse");
const env = require("../config/env");

function notFound(req, res) {
  return failure(res, `Route ${req.originalUrl} not found`, 404);
}

function errorHandler(err, req, res, _next) {
  if (err.code === "23505") {
    return failure(res, "A record with this value already exists", 409);
  }
  if (err.code === "23503") {
    return failure(res, "Related record not found", 400);
  }
  if (err.code === "22P02") {
    return failure(res, "Invalid identifier", 400);
  }

  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    return failure(res, "Invalid or expired token", 401);
  }

  const status = err.status || err.statusCode || 500;
  const message = status === 500 && env.isProd ? "Something went wrong" : err.message;

  return failure(res, message, status);
}

module.exports = { notFound, errorHandler };
