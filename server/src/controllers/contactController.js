const { asyncHandler } = require("../utils/asyncHandler");
const { success } = require("../utils/apiResponse");
const contactService = require("../services/contact.service");

const create = asyncHandler(async (req, res) => {
  await contactService.create(req.body);
  return success(res, { message: "Thanks! We'll get back to you shortly." }, 201);
});

const listAdmin = asyncHandler(async (_req, res) => {
  const messages = await contactService.listAdmin();
  return success(res, { messages });
});

const getOne = asyncHandler(async (req, res) => {
  const message = await contactService.getOne(req.params.id);
  return success(res, { message });
});

const updateStatus = asyncHandler(async (req, res) => {
  const message = await contactService.updateStatus(req.params.id, req.body.status);
  return success(res, { message });
});

const remove = asyncHandler(async (req, res) => {
  await contactService.remove(req.params.id);
  return success(res, { message: "Message deleted" });
});

module.exports = { create, listAdmin, getOne, updateStatus, remove };
