const nodemailer = require("nodemailer");
const env = require("../config/env");

function isConfigured() {
  return Boolean(env.smtp.host && env.smtp.user && env.smtp.password);
}

function createTransport() {
  return nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.port === 465,
    auth: {
      user: env.smtp.user,
      pass: env.smtp.password,
    },
  });
}

async function sendMail({ to, subject, html, text }) {
  if (!isConfigured()) {
    return { skipped: true };
  }

  const transporter = createTransport();
  await transporter.sendMail({
    from: env.smtp.from,
    to,
    subject,
    html,
    text,
  });

  return { skipped: false };
}

async function notifyAdminOfContact(payload) {
  const adminInbox = env.adminEmail;
  if (!adminInbox) return { skipped: true };

  return sendMail({
    to: adminInbox,
    subject: `New inquiry from ${payload.name}`,
    text: `${payload.name} (${payload.email}) sent a message about ${payload.service || "general inquiry"}.\n\n${payload.message}`,
    html: `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone || "—"}</p>
      <p><strong>Company:</strong> ${payload.company || "—"}</p>
      <p><strong>Service:</strong> ${payload.service || "—"}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message}</p>
    `,
  });
}

async function sendContactConfirmation(payload) {
  return sendMail({
    to: payload.email,
    subject: "We received your message — HNitSolutions",
    text: `Hi ${payload.name}, thanks for reaching out. Our team will get back to you shortly.`,
    html: `
      <p>Hi ${payload.name},</p>
      <p>Thanks for contacting HNitSolutions. We received your message and will reply shortly.</p>
      <p>— The HNitSolutions team</p>
    `,
  });
}

module.exports = {
  sendMail,
  notifyAdminOfContact,
  sendContactConfirmation,
  isConfigured,
};
