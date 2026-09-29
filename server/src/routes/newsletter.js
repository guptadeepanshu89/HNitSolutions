const express = require("express");
const { subscribe } = require("../controllers/newsletterController");
const { newsletterRules } = require("../validators/newsletterValidator");
const { validate } = require("../middleware/validate");
const { formLimiter } = require("../middleware/rateLimiter");

const router = express.Router();

router.post("/", formLimiter, newsletterRules, validate, subscribe);

module.exports = router;
