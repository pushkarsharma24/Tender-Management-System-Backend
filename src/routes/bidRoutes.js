const express = require("express");
const router = express.Router();
const { getBidsForTender, submitBid } = require("../controllers/bidController");

router.get("/:tenderId", getBidsForTender);
router.post("/", submitBid);

module.exports = router;
