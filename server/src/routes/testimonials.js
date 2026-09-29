const express = require("express");
const { listPublic } = require("../controllers/testimonialController");

const router = express.Router();

router.get("/", listPublic);

module.exports = router;
