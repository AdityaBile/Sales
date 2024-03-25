const express = require("express");
const router = express.Router();

const transactControllers = require("./../controller/transactionController");

// GET /api/transactions
router.route("/").get(transactControllers.home);

module.exports = router;
