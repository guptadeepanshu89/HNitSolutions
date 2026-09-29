const servicesRepository = require("../repositories/services.repository");
const { slugify } = require("../utils/slugify");
const { httpError } = require("../utils/httpError");

async function listPublic() {
  return servicesRepository.findActive();
}

async function getBySlug(slug) {
  const service = await servicesRepository.findBySlug(slug);
  if (!service || !service.isActive) {
    throw httpError("Service not found", 404);
  }
  return service;
}

async function listAdmin() {
  return servicesRepository.findAll();
}

async function create(payload) {
  return servicesRepository.create({
    title: payload.title,
    slug: payload.slug || slugify(payload.title),
    description: payload.description,
    icon: payload.icon || "sparkles",
    category: payload.category || "General",
    content: payload.content || {},
    isActive: payload.isActive ?? true,
  });
}

async function update(id, payload) {
  const service = await servicesRepository.update(id, payload);
  if (!service) {
    throw httpError("Service not found", 404);
  }
  return service;
}

async function remove(id) {
  const deleted = await servicesRepository.remove(id);
  if (!deleted) {
    throw httpError("Service not found", 404);
  }
}

module.exports = { listPublic, getBySlug, listAdmin, create, update, remove };
