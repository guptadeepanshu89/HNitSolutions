const newsletterRepository = require("../repositories/newsletter.repository");
const { httpError } = require("../utils/httpError");

async function subscribe(email) {
  const existing = await newsletterRepository.findByEmail(email);
  if (existing) {
    throw httpError("This email is already subscribed", 409);
  }
  return newsletterRepository.create(email);
}

async function listAdmin() {
  return newsletterRepository.findAll();
}

async function remove(id) {
  const deleted = await newsletterRepository.remove(id);
  if (!deleted) {
    throw httpError("Subscriber not found", 404);
  }
}

module.exports = { subscribe, listAdmin, remove };
