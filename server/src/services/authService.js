const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const env = require("../config/env");
const usersRepository = require("../repositories/users.repository");
const { httpError } = require("../utils/httpError");

function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );
}

function cookieOptions() {
  return {
    httpOnly: true,
    secure: env.isProd,
    sameSite: env.isProd ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  };
}

function sanitizeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
}

async function authenticateUser(email, password) {
  const user = await usersRepository.findByEmail(email);
  if (!user) {
    throw httpError("Invalid email or password", 401);
  }

  const matches = await bcrypt.compare(password, user.passwordHash);
  if (!matches) {
    throw httpError("Invalid email or password", 401);
  }

  return {
    user: sanitizeUser(user),
    token: signToken(user),
  };
}

async function getCurrentUser(id) {
  const user = await usersRepository.findById(id);
  if (!user) {
    throw httpError("User not found", 404);
  }
  return sanitizeUser(user);
}

module.exports = {
  signToken,
  cookieOptions,
  sanitizeUser,
  authenticateUser,
  getCurrentUser,
};
