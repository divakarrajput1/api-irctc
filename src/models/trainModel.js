const db = require("../config/db");

class Train {
  static async addTrain(name, source, destination, totalSeats) {
    const [result] = await db.execute(
      "INSERT INTO trains (name, source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?, ?)",
      [name, source, destination, totalSeats, totalSeats]
    );
    return result;
  }

  static async getTrainsByRoute(source, destination) {
    const [rows] = await db.execute(
      "SELECT * FROM trains WHERE source = ? AND destination = ?",
      [source, destination]
    );
    return rows;
  }

  static async updateAvailableSeats(trainId, seatsBooked) {
    const [result] = await db.execute(
      "UPDATE trains SET available_seats = available_seats - ? WHERE id = ?",
      [seatsBooked, trainId]
    );
    return result;
  }
}

module.exports = Train;
