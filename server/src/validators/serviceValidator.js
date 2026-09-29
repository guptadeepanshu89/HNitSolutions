const { body, param } = require("express-validator");

const serviceRules = [
  body("title").trim().isLength({ min: 2, max: 120 }).withMessage("Title is required"),
  body("slug")
    .optional()
    .trim()
    .matches(/^[a-z0-9-]+$/)
    .withMessage("Slug may only contain lowercase letters, numbers and hyphens"),
  body("description").trim().isLength({ min: 10, max: 500 }).withMessage("Description is required"),
  body("icon").optional().trim().isLength({ max: 60 }),
  body("category").optional().trim().isLength({ max: 60 }),
  body("content").optional().isObject(),
  body("isActive").optional().isBoolean(),
];

const idParam = [param("id").isUUID().withMessage("Invalid id")];

module.exports = { serviceRules, idParam };
