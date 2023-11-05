// Baseline URL for requests
const baseURL = 'fill in later'

// map out zones for catalogue
const arrZones = [ "bs", "ll", "th", "co", "md" ]
const hwZones = [ "co", "dr", "ab" ]
const sbZones = [ "ga", "hi", "ot" ]
const shbZones = [ "nr" ]
const ewZones = [ "ne", "il", "ss", "wu" ]
const expansions = [ "arr", "hw", "sb", "shb", "ew" ]

// music/logic tracking 
let isPlaying = false
let currentSong = "Nothing!"
let currentExpansion
let currentExpansionZones = []
let currentZone
let currentTime
let manualDay
let isNight

/*
 *
 * UPDATE FUNCTIONS
 * 
*/

/* change the current music if a new selection was made on the expansion list */
function updateExpansion(currentExpansion) {
    currentExpansionZones = []
    switch (currentExpansion) {
        case "arr": 
            currentExpansionZones = arrZones
            updateSong()
            break
        case "hw":
            currentExpansionZones = hwZones
            updateSong()
            break
        case "sb":
            currentExpansionZones = sbZones
            updateSong()
            break
        case "shb":
            currentExpansionZones = shbZones
            updateSong()
            break
        case "ew":
            currentExpansionZones = ewZones
            updateSong()
            break
    }
}

/* update the song currently playing and update the UI to fit accordingly */
function updateSong() {
    updateUI()
}

/* updates the popup to display to live selection/song */
function updateUI() {
    document.getElementById("currentSong").innerHTML = currentSong
    // TODO zone detection based on song name
    document.getElementById("currentZone").innerHTML = currentZone
}

/* continuously check on time for day/night music */
function checkTime() {
    currentTime = new Date().getHours()
    currentTime >=18 && currentTime < 6  ? isNight = true : isNight = false
    console.log("current hour: " + currentTime)
    console.log("checkTime" + ": " + isNight)
}
setInterval(checkTime, 1000)