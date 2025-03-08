const express = require("express");
const router = express.Router();
const { getAllTenders, createTender } = require("../controllers/tenderController");

router.get("/", getAllTenders);
router.post("/", createTender);

module.exports = router;
