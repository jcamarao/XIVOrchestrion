// Baseline URL for requests
const baseURL = 'fill in later'

// load in the data for music information mapping
const arrData = []

// music/logic tracking 
let currentSong = "Not Playing"
let isPlaying = false
let manualControl = false
let currentTime

/*
 *
 * check if default local storage variables are set and adjust accordingly 
 * 
*/ 

// default values
let currentExpansion = "arr"
let currentExpansionSongs = arrData
let currentZone = "None"
let isNight

// set the defaults for the expansion
browser.storage.local.set({"expansion": "arr"})

// set the default for the songs in current expansion
browser.storage.local.set({"expansionSongs": []})

// set the default for expansion
browser.storage.local.set({"zone": "none"})

// set the default for time
currentTime = new Date().getHours()
currentTime >=18 && !(currentTime < 6)  ? isNight = true : isNight = false
browser.storage.local.set({"time": isNight})

// set the default for manual control
browser.storage.local.set({"manual": manualControl})

// set the default for music state
browser.storage.local.set({"isPlaying": isPlaying})

/*
 *
 * UPDATE FUNCTIONS
 * 
*/

/* change the current music if a new selection was made on the expansion list */
// function updateExpansion(currentExpansion) {
//     let selectId = "expansionSelect"
//     switch (currentExpansion) {
//         case "arr": 
//         // currentExpansionSongs = JSON.parse(arrData); 
//             updateUI(selectId, currentExpansion)
//             break
//         case "hw":
//             updateUI(selectId, currentExpansion)
//             break
//         case "sb":
//             updateUI(selectId, currentExpansion)
//             break
//         case "shb":
//             updateUI(selectId, currentExpansion)
//             break
//         case "ew":
//             updateUI(selectId, currentExpansion)
//             break
//     }
// }

// /* update the song currently playing and update the UI to fit accordingly */
// function updateSong(currentExpansionSongs) {
//     // get the song based on index 0 of array of objects
//     // play it
//     // save info for updating ui
//     currentSong = currentExpansionSongs[0].Name
//     currentZone = currentExpansionSongs[0].Zone
//     updateUI(currentSong, currentZone)
// }

// /* updates the popup to display to live selection/song */
// function updateUI(id, changeToValue) {
//     switch (id) {
//         case "currentSong":
//             document.getElementById("currentSong").innerHTML = changeToValue
//             break
//         case "currentZone":
//             document.getElementById("currentZone").innerHTML = changeToValue
//             break
//         case "expansionSelect":
//             document.getElementById("expansionSelect").value = changeToValue
//             break
//     }
// }

/* continuously check on time for day/night time requirement */
function checkTime() {
    currentTime = new Date().getHours()
    currentTime >=18 && !(currentTime < 6) ? isNight = true : isNight = false
    browser.storage.local.set({"time": isNight})
}
setInterval(checkTime, 1000)
