const { asyncHandler } = require("../utils/asyncHandler");
const { success } = require("../utils/apiResponse");
const { getStats } = require("../services/admin.service");

const stats = asyncHandler(async (_req, res) => {
  const totals = await getStats();
  return success(res, { totals });
});

module.exports = { stats };
