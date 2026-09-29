const { asyncHandler } = require("../utils/asyncHandler");
const { success } = require("../utils/apiResponse");
const newsletterService = require("../services/newsletter.service");

const subscribe = asyncHandler(async (req, res) => {
  const subscriber = await newsletterService.subscribe(req.body.email);
  return success(res, { subscriber, message: "You are now subscribed." }, 201);
});

const listAdmin = asyncHandler(async (_req, res) => {
  const subscribers = await newsletterService.listAdmin();
  return success(res, { subscribers });
});

const remove = asyncHandler(async (req, res) => {
  await newsletterService.remove(req.params.id);
  return success(res, { message: "Subscriber removed" });
});

module.exports = { subscribe, listAdmin, remove };
