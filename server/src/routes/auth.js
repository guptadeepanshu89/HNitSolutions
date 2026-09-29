const express = require("express");
const { login, logout, me } = require("../controllers/authController");
const { loginRules } = require("../validators/authValidator");
const { validate } = require("../middleware/validate");
const { authenticate } = require("../middleware/auth");
const { authLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/login", authLimiter, loginRules, validate, login);
router.post("/logout", logout);
router.get("/me", authenticate, me);

module.exports = router;
