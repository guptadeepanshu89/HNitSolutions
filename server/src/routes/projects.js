const express = require("express");
const { listPublic, getBySlug } = require("../controllers/projectController");

const router = express.Router();

router.get("/", listPublic);
router.get("/:slug", getBySlug);

module.exports = router;
