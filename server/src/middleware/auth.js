const jwt = require("jsonwebtoken");
const env = require("../config/env");
const { failure } = require("../utils/apiResponse");

function getToken(req) {
  const header = req.headers.authorization;
  if (header && header.startsWith("Bearer ")) {
    return header.slice(7);
  }
  return req.cookies?.token;
}

function authenticate(req, res, next) {
  const token = getToken(req);
  if (!token) {
    return failure(res, "Authentication required", 401);
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret);
    req.user = payload;
    return next();
  } catch {
    return failure(res, "Invalid or expired token", 401);
  }
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== "ADMIN") {
    return failure(res, "Admin access required", 403);
  }
  return next();
}

module.exports = { authenticate, requireAdmin, getToken };
