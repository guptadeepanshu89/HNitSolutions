const express = require("express");
const { authenticate, requireAdmin } = require("../middleware/auth");
const { validate } = require("../middleware/validate");
const { serviceRules, idParam } = require("../validators/serviceValidator");
const { stats } = require("../controllers/adminController");
const serviceController = require("../controllers/serviceController");
const projectController = require("../controllers/projectController");
const testimonialController = require("../controllers/testimonialController");
const contactController = require("../controllers/contactController");
const newsletterController = require("../controllers/newsletterController");

const router = express.Router();

router.use(authenticate, requireAdmin);

router.get("/stats", stats);

router.get("/messages", contactController.listAdmin);
router.get("/messages/:id", contactController.getOne);
router.patch("/messages/:id", contactController.updateStatus);
router.delete("/messages/:id", contactController.remove);

router.get("/services", serviceController.listAdmin);
router.post("/services", serviceRules, validate, serviceController.create);
router.put("/services/:id", idParam, validate, serviceController.update);
router.delete("/services/:id", idParam, validate, serviceController.remove);

router.get("/projects", projectController.listAdmin);
router.post("/projects", projectController.create);
router.put("/projects/:id", projectController.update);
router.delete("/projects/:id", projectController.remove);

router.get("/testimonials", testimonialController.listAdmin);
router.post("/testimonials", testimonialController.create);
router.put("/testimonials/:id", testimonialController.update);
router.delete("/testimonials/:id", testimonialController.remove);

router.get("/newsletters", newsletterController.listAdmin);
router.delete("/newsletters/:id", newsletterController.remove);

module.exports = router;
