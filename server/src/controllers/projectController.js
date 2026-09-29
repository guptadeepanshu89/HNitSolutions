const { asyncHandler } = require("../utils/asyncHandler");
const { success } = require("../utils/apiResponse");
const projectsService = require("../services/projects.service");

const listPublic = asyncHandler(async (req, res) => {
  const projects = await projectsService.listPublic(req.query.category);
  return success(res, { projects });
});

const getBySlug = asyncHandler(async (req, res) => {
  const project = await projectsService.getBySlug(req.params.slug);
  return success(res, { project });
});

const listAdmin = asyncHandler(async (_req, res) => {
  const projects = await projectsService.listAdmin();
  return success(res, { projects });
});

const create = asyncHandler(async (req, res) => {
  const project = await projectsService.create(req.body);
  return success(res, { project }, 201);
});

const update = asyncHandler(async (req, res) => {
  const project = await projectsService.update(req.params.id, req.body);
  return success(res, { project });
});

const remove = asyncHandler(async (req, res) => {
  await projectsService.remove(req.params.id);
  return success(res, { message: "Project deleted" });
});

module.exports = { listPublic, getBySlug, listAdmin, create, update, remove };
