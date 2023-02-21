const mongoose = require("mongoose")

const planetsSchema = new mongoose.Schema({
  planetName: {
    required: true,
    type: String,
  },
})

module.exports = mongoose.model("Planet", planetsSchema)
