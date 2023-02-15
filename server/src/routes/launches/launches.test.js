const app = require("../../app")
const request = require("supertest")

describe("GET /launches", () => {
  const completedRequestObject = {
    mission: "mission 1",
    target: "Kepler-1652 b",
    rocket: "Rocket 1",
    launchDate: "2024-12-11T19:00:00.000Z",
  }

  const requestObjectWithoutDate = {
    mission: "mission 1",
    target: "Kepler-1652 b",
    rocket: "Rocket 1",
    launchDate: "invalid date",
  }

  const requestObjectWithMissingKey = {
    mission: "mission 1",
    target: "Kepler-1652 b",
    rocket: "Rocket 1",
  }

  test("It should be respond with status code 200", async () => {
    await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200)
  })

  test("It should be respond with status code 201 created", async () => {
    await request(app)
      .post("/launches")
      .send(completedRequestObject)
      .expect("Content-Type", /json/)
      .expect(201)
  })

  test("It should be respond with status code 400 missing key", async () => {
    const response = await request(app)
      .post("/launches")
      .send(requestObjectWithMissingKey)
      .expect("Content-Type", /json/)
      .expect(400)

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    })
  })

  test("It should be respond with status code 400 invalid date", async () => {
    const response = await request(app)
      .post("/launches")
      .send(requestObjectWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400)

    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    })
  })
})
