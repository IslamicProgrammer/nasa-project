const launches = new Map()

let latestFlightNumber = 100

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)

function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++

  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["Zero to Mastery", "NASA"],
      flightNumber: latestFlightNumber,
    })
  )
}

function existsLaunchId(id) {
  console.log("hey: ", launches.values())
  return launches.has(id)
}

function abortLaunch(id) {
  const aborted = launches.get(id)
  aborted.success = false
  aborted.upcoming = false
  return aborted
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchId,
  abortLaunch,
}
