require("dotenv").config();

const bcrypt = require("bcryptjs");
const { connectDatabase, disconnectDatabase } = require("../src/config/db");
const usersRepository = require("../src/repositories/users.repository");
const servicesRepository = require("../src/repositories/services.repository");
const projectsRepository = require("../src/repositories/projects.repository");
const testimonialsRepository = require("../src/repositories/testimonials.repository");
const contactRepository = require("../src/repositories/contact.repository");
const newsletterRepository = require("../src/repositories/newsletter.repository");
const { services, projects, testimonials } = require("./seeds/content");

async function seed() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in the environment before seeding.");
  }

  await connectDatabase();

  await newsletterRepository.deleteAll();
  await contactRepository.deleteAll();
  await testimonialsRepository.deleteAll();
  await projectsRepository.deleteAll();
  await servicesRepository.deleteAll();
  await usersRepository.deleteAll();

  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await usersRepository.create({
    name: "HNitSolutions Admin",
    email: adminEmail,
    passwordHash,
    role: "ADMIN",
  });

  for (const service of services) {
    await servicesRepository.create({
      title: service.title,
      slug: service.slug,
      description: service.description,
      icon: service.icon,
      category: service.category,
      content: service.content,
      isActive: true,
    });
  }

  for (const project of projects) {
    await projectsRepository.create({
      title: project.title,
      slug: project.slug,
      description: project.description,
      category: project.category,
      image: project.image,
      technologies: project.technologies,
      projectUrl: project.projectUrl,
    });
  }

  for (const testimonial of testimonials) {
    await testimonialsRepository.create(testimonial);
  }

  console.info("Seed complete: 14 services, 6 projects, 6 testimonials, 1 admin user.");
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await disconnectDatabase();
  });
