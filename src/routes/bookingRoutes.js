const express = require("express");
const bookingController = require("../controllers/bookingController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/bookings", authenticateUser, bookingController.bookSeat);

module.exports = router;
