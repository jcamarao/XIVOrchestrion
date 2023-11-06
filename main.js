// Baseline URL for requests
const baseURL = 'fill in later'

// load in the data for music information mapping
const arrData = [{"name":"Wailers and Waterwheels","zone":"Gridania","time":"Day"},{"name":"Dance of the Fireflies","zone":"Gridania","time":"Night"},{
    "name":"A New Hope","zone":"Ul\'Dah","time":"Day"},{"name":"Sultana Dreaming","zone":"Ul\'Dah","time":"Night"},
    {"name":"I Am the Sea","zone":"Limsa Lominsa","time":"Day"},{"name":"A Sailor Never Sleep","zone":"Limsa Lominsa","time":"Night"},{
        "name":"Frontiers Within","zone":"Mor Dhona","time":"Day"},{"name":"Reflections","zone":"Mor Dhona","time":"Night"},
        {"name":"Serenity","zone":"The Black Shroud Field Theme","time":"Both"},{"name":"To the Sun","zone":"Thanalan Field Theme","time":"Both"},{
            "name":"On Westerly Winds","zone":"La Noscea Field Theme","time":"Both"}]

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
let currentSongs = []
let currentZone = "None"
let isNight

// set the default for time
currentTime = new Date().getHours()
currentTime >=18 && !(currentTime < 6)  ? isNight = true : isNight = false
browser.storage.local.set({"isNight": isNight})

// set the defaults for the expansion
browser.storage.local.set({"expansion": "arr"})

// create the list of songs that match the current time from the expansion
if (isNight) {
    for (let song of currentExpansionSongs) {
        if (song.time == "Night" || song.time == "Both") {
            currentSongs.push(song)
        }
    }
} else {
    for (let song of currentExpansionSongs) {
        if (song.time == "Day" || song.time == "Both") {
            currentSongs.push(song)
        }
    }
}

// shuffle the song order
currentSongs = currentSongs.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)

// set the default for the songs in current expansion
browser.storage.local.set({"currentExpansionSongs": currentExpansionSongs})
// set the default for the songs in queue according to time
browser.storage.local.set({"songsToPlay": currentSongs})
// set the default value for the current song 
browser.storage.local.set({"songZone": currentSongs[0].zone})
// set the default for expansion
browser.storage.local.set({"songName": currentSongs[0].name})
// set the default for manual control
browser.storage.local.set({"manual": manualControl})
// set the default for music state
browser.storage.local.set({"isPlaying": isPlaying})

/*
 *
 * default value assigning ends here
 * 
 */ 

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
    browser.storage.local.set({"isNight": isNight})
}
setInterval(checkTime, 1000)
