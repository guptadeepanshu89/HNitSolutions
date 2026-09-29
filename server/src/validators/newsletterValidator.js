const { body } = require("express-validator");

const newsletterRules = [
  body("email").isEmail().withMessage("A valid email is required").normalizeEmail(),
];

module.exports = { newsletterRules };
