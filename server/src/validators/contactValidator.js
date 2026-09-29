const { body } = require("express-validator");

const contactRules = [
  body("name").trim().isLength({ min: 2, max: 80 }).withMessage("Name is required"),
  body("email").isEmail().withMessage("A valid email is required").normalizeEmail(),
  body("phone")
    .optional({ checkFalsy: true })
    .matches(/^[+\d][\d\s()-]{6,19}$/)
    .withMessage("Enter a valid phone number"),
  body("company").optional({ checkFalsy: true }).trim().isLength({ max: 120 }),
  body("service").optional({ checkFalsy: true }).trim().isLength({ max: 80 }),
  body("message").trim().isLength({ min: 10, max: 2000 }).withMessage("Message is required"),
];

module.exports = { contactRules };
