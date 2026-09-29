const testimonialsRepository = require("../repositories/testimonials.repository");
const { httpError } = require("../utils/httpError");

async function list() {
  return testimonialsRepository.findAll();
}

async function create(payload) {
  return testimonialsRepository.create(payload);
}

async function update(id, payload) {
  const testimonial = await testimonialsRepository.update(id, payload);
  if (!testimonial) {
    throw httpError("Testimonial not found", 404);
  }
  return testimonial;
}

async function remove(id) {
  const deleted = await testimonialsRepository.remove(id);
  if (!deleted) {
    throw httpError("Testimonial not found", 404);
  }
}

module.exports = { list, create, update, remove };
