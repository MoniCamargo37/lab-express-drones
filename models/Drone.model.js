// Iteration #1

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const { Schema } = mongoose;
const dronesSchema = new Schema({
  name: {
    type: String,
    required: [true, "You must introduce a title to insert new drone"],
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Drone = mongoose.model("Drone", dronesSchema);

module.exports = Drone;
