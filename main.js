// Baseline URL for requests
const baseURL = "https://d3o089717konbo.cloudfront.net"

// load in the data for music information mapping
const arrData = [{"name":"Wailers and Waterwheels","zone":"Gridania","time":"Day"},{"name":"Dance of the Fireflies","zone":"Gridania","time":"Night"},{
    "name":"A New Hope","zone":"Ul\'Dah","time":"Day"},{"name":"Sultana Dreaming","zone":"Ul\'Dah","time":"Night"},
    {"name":"I Am the Sea","zone":"Limsa Lominsa","time":"Day"},{"name":"A Sailor Never Sleep","zone":"Limsa Lominsa","time":"Night"},{
        "name":"Frontiers Within","zone":"Mor Dhona","time":"Day"},{"name":"Reflections","zone":"Mor Dhona","time":"Night"},
        {"name":"Serenity","zone":"The Black Shroud Field Theme","time":"Both"},{"name":"To the Sun","zone":"Thanalan Field Theme","time":"Both"},{
            "name":"On Westerly Winds","zone":"La Noscea Field Theme","time":"Both"}]
const hwData = []
const sbData = []
const shbData = []
const ewData = []

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


// TODO TODO TODO TODO TODO

/* keep track of the changing variables in local storage and modify if new option is selected */
function listener(itemChanged) {
    const changedItems = Object.keys(itemChanged);
    for (const item of changedItems) {
        switch (item) {
            case "isNight":
                /* 
                 * when isNight changes:
                 * 2. grab the new songs based on isNight and add them to songsToPlay
                 * 3. adjust the current song playing to first item in songsToPlay
                 * 4. change the ui to match the current song playing
                 */
                !(itemChanged[item].oldValue == itemChanged[item].newValue) ? console.log("isNight Changed") : console.log("isNight did not Change")
                break
            case "expansion":
                /* 
                 * when expansion changes:
                 * 1. change currentExpansionSongs to the new expansion
                 * 2. grab the new songs based on isNight and add them to songsToPlay
                 * 3. adjust the current song playing to first item in songsToPlay
                 * 4. change the ui to match the current song playing
                 */
        }
    }
}  
browser.storage.local.onChanged.addListener(listener)

/* continuously check on time for day/night time requirement */
function checkTime() {
    currentTime = new Date().getHours()
    currentTime >=18 && !(currentTime < 6) ? isNight = true : isNight = false
    browser.storage.local.set({"isNight": isNight})
}
setInterval(checkTime, 1000)
