const { asyncHandler } = require("../utils/asyncHandler");
const { success } = require("../utils/apiResponse");
const { authenticateUser, cookieOptions, getCurrentUser } = require("../services/authService");

const login = asyncHandler(async (req, res) => {
  const result = await authenticateUser(req.body.email, req.body.password);
  res.cookie("token", result.token, cookieOptions());
  return success(res, result);
});

const logout = asyncHandler(async (_req, res) => {
  res.clearCookie("token", { ...cookieOptions(), maxAge: 0 });
  return success(res, { message: "Logged out" });
});

const me = asyncHandler(async (req, res) => {
  const user = await getCurrentUser(req.user.id);
  return success(res, { user });
});

module.exports = { login, logout, me };
