const { validationResult } = require("express-validator");
const { failure } = require("../utils/apiResponse");

function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return failure(res, "Validation failed", 400, {
    errors: errors.array().map((item) => ({
      field: item.path,
      message: item.msg,
    })),
  });
}

module.exports = { validate };
