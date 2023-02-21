const http = require("http")

const app = require("./app")
const mongoose = require("mongoose")

const { loadPlanetsData } = require("./models/planets.model")

const PORT = process.env.PORT || 8000

const MONGO_URL = `mongodb+srv://nasa-api:hFWUULnZaHh7w7yM@cluster0.zpegc.mongodb.net/?retryWrites=true&w=majority`

const server = http.createServer(app)

mongoose.connection.once("open", () => {
  console.log("Mongo DB connected!")
})

mongoose.connection.on("error", err => {
  console.log(err)
})

async function startServer() {
  await mongoose.connect(MONGO_URL)
  await loadPlanetsData()

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })
}

startServer()
