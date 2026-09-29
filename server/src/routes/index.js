const express = require("express");
const authRoutes = require("./auth");
const serviceRoutes = require("./services");
const projectRoutes = require("./projects");
const testimonialRoutes = require("./testimonials");
const contactRoutes = require("./contact");
const newsletterRoutes = require("./newsletter");
const adminRoutes = require("./admin");

const router = express.Router();

router.get("/health", (_req, res) => {
  res.json({ success: true, data: { status: "ok" } });
});

router.use("/auth", authRoutes);
router.use("/services", serviceRoutes);
router.use("/projects", projectRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/contact", contactRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
