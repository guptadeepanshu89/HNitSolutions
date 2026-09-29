const { asyncHandler } = require("../utils/asyncHandler");
const { success } = require("../utils/apiResponse");
const servicesService = require("../services/services.service");

const listPublic = asyncHandler(async (_req, res) => {
  const services = await servicesService.listPublic();
  return success(res, { services });
});

const getBySlug = asyncHandler(async (req, res) => {
  const service = await servicesService.getBySlug(req.params.slug);
  return success(res, { service });
});

const listAdmin = asyncHandler(async (_req, res) => {
  const services = await servicesService.listAdmin();
  return success(res, { services });
});

const create = asyncHandler(async (req, res) => {
  const service = await servicesService.create(req.body);
  return success(res, { service }, 201);
});

const update = asyncHandler(async (req, res) => {
  const service = await servicesService.update(req.params.id, req.body);
  return success(res, { service });
});

const remove = asyncHandler(async (req, res) => {
  await servicesService.remove(req.params.id);
  return success(res, { message: "Service deleted" });
});

module.exports = { listPublic, getBySlug, listAdmin, create, update, remove };
