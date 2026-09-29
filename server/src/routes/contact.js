const express = require("express");
const { create } = require("../controllers/contactController");
const { contactRules } = require("../validators/contactValidator");
const { validate } = require("../middleware/validate");
const { formLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/", formLimiter, contactRules, validate, create);

module.exports = router;
