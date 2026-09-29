const projectsRepository = require("../repositories/projects.repository");
const { slugify } = require("../utils/slugify");
const { httpError } = require("../utils/httpError");

async function listPublic(category) {
  return projectsRepository.findAll(category);
}

async function getBySlug(slug) {
  const project = await projectsRepository.findBySlug(slug);
  if (!project) {
    throw httpError("Project not found", 404);
  }
  return project;
}

async function listAdmin() {
  return projectsRepository.findAll();
}

async function create(payload) {
  return projectsRepository.create({
    title: payload.title,
    slug: payload.slug || slugify(payload.title),
    description: payload.description,
    category: payload.category,
    image: payload.image || "aurora",
    technologies: payload.technologies || [],
    projectUrl: payload.projectUrl,
  });
}

async function update(id, payload) {
  const project = await projectsRepository.update(id, payload);
  if (!project) {
    throw httpError("Project not found", 404);
  }
  return project;
}

async function remove(id) {
  const deleted = await projectsRepository.remove(id);
  if (!deleted) {
    throw httpError("Project not found", 404);
  }
}

module.exports = { listPublic, getBySlug, listAdmin, create, update, remove };
