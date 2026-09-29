const { asyncHandler } = require("../utils/asyncHandler");
const { success } = require("../utils/apiResponse");
const testimonialsService = require("../services/testimonials.service");

const listPublic = asyncHandler(async (_req, res) => {
  const testimonials = await testimonialsService.list();
  return success(res, { testimonials });
});

const listAdmin = asyncHandler(async (_req, res) => {
  const testimonials = await testimonialsService.list();
  return success(res, { testimonials });
});

const create = asyncHandler(async (req, res) => {
  const testimonial = await testimonialsService.create(req.body);
  return success(res, { testimonial }, 201);
});

const update = asyncHandler(async (req, res) => {
  const testimonial = await testimonialsService.update(req.params.id, req.body);
  return success(res, { testimonial });
});

const remove = asyncHandler(async (req, res) => {
  await testimonialsService.remove(req.params.id);
  return success(res, { message: "Testimonial deleted" });
});

module.exports = { listPublic, listAdmin, create, update, remove };
