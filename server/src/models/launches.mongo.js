const mongoose = require("mongoose")

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    required: true,
    type: String,
  },
  mission: {
    required: true,
    type: String,
  },
  rocket: {
    required: true,
    type: String,
  },
  launchDate: {
    required: true,
    type: Date,
  },
  target: {
    type: String,
    required: true,
  },
  customer: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
})

module.exports = mongoose.model("Launch", launchesSchema)
