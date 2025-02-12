const express = require("express");
const trainController = require("../controllers/trainController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/trains", authenticateUser, trainController.addTrain);
router.get("/availability", trainController.getSeatAvailability);

module.exports = router;
