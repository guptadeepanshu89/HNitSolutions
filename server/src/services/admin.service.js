const contactRepository = require("../repositories/contact.repository");
const projectsRepository = require("../repositories/projects.repository");
const servicesRepository = require("../repositories/services.repository");
const newsletterRepository = require("../repositories/newsletter.repository");
const testimonialsRepository = require("../repositories/testimonials.repository");

async function getStats() {
  const [messages, projects, services, subscribers, testimonials] = await Promise.all([
    contactRepository.count(),
    projectsRepository.count(),
    servicesRepository.count(),
    newsletterRepository.count(),
    testimonialsRepository.count(),
  ]);

  return { messages, projects, services, subscribers, testimonials };
}

module.exports = { getStats };
