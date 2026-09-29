const contactRepository = require("../repositories/contact.repository");
const { notifyAdminOfContact, sendContactConfirmation } = require("./emailService");
const { httpError } = require("../utils/httpError");

async function create(payload) {
  const contact = await contactRepository.create(payload);
  await Promise.allSettled([
    notifyAdminOfContact(contact),
    sendContactConfirmation(contact),
  ]);
  return contact;
}

async function listAdmin() {
  return contactRepository.findAll();
}

async function getOne(id) {
  const message = await contactRepository.findById(id);
  if (!message) {
    throw httpError("Message not found", 404);
  }
  return message;
}

async function updateStatus(id, status) {
  const message = await contactRepository.updateStatus(id, status);
  if (!message) {
    throw httpError("Message not found", 404);
  }
  return message;
}

async function remove(id) {
  const deleted = await contactRepository.remove(id);
  if (!deleted) {
    throw httpError("Message not found", 404);
  }
}

module.exports = { create, listAdmin, getOne, updateStatus, remove };
