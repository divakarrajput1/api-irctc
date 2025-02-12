const Booking = require("../models/bookingModel");
const Train = require("../models/trainModel");

const bookSeat = async (req, res) => {
  const { trainId, seatsBooked } = req.body;
  const userId = req.user.id; // Extracted from JWT token
  try {
    // Check seat availability
    const train = await Train.getTrainsByRoute(trainId);
    if (train.available_seats < seatsBooked) {
      return res.status(400).json({ error: "Not enough seats available" });
    }

    // Book seats
    await Booking.createBooking(userId, trainId, seatsBooked);
    await Train.updateAvailableSeats(trainId, seatsBooked);

    res.status(201).json({ message: "Seats booked successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { bookSeat };
