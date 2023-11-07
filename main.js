// Baseline URL for requests
const baseURL = "https://d3o089717konbo.cloudfront.net"

// load in the data for music information mapping
const arrData = [{"name":"Wailers and Waterwheels","zone":"Gridania","time":"Day"},{"name":"Dance of the Fireflies","zone":"Gridania","time":"Night"},
{"name":"A New Hope","zone":"Ul\'Dah","time":"Day"},{"name":"Sultana Dreaming","zone":"Ul\'Dah","time":"Night"},
{"name":"I Am the Sea","zone":"Limsa Lominsa","time":"Day"},{"name":"A Sailor Never Sleep","zone":"Limsa Lominsa","time":"Night"},
{"name":"Frontiers Within","zone":"Mor Dhona","time":"Day"},{"name":"Reflections","zone":"Mor Dhona","time":"Night"},
{"name":"Serenity","zone":"The Black Shroud Field Theme","time":"Both"},{"name":"To the Sun","zone":"Thanalan Field Theme","time":"Both"},
{"name":"On Westerly Winds","zone":"La Noscea Field Theme","time":"Both"}]
const hwData = [{"name":"Solid","zone":"Ishgard (Foundation)","time":"Day"},{"name":"Night in the Brume","zone":"Ishgard (Foundation)","time":"Night"},
{"name":"Nobility Obliges","zone":"Ishgard (Pillars)","time":"Day"},{"name":"Nobility Sleeps","zone":"Ishgard (Pillars)","time":"Night"},
{"name":"Against the Wind","zone":"Coerthas Western Highlands","time":"Day"},{"name":"Black and White","zone":"Coerthas Western Highlands","time":"Night"},
{"name":"Painted Foothills","zone":"The Dravanian Forelands","time":"Day"},{"name":"Painted Skies","zone":"The Dravanian Forelands","time":"Night"},
{"name":"Missing Pages","zone":"The Dravanian Hinterlands","time":"Day"},{"name":"The Silent Regard of Stars","zone":"The Dravanian Hinterlands","time":"Night"},
{"name":"Landlords","zone":"The Churning Mists","time":"Day"},{"name":"Skylords","zone":"The Churning Mists","time":"Night"},
{"name":"Lost in the Clouds","zone":"The Sea of Clouds","time":"Day"},{"name":"Close to the Heavens","zone":"The Sea of Clouds","time":"Night"},
{"name":"Order Yet Undeciphered","zone":"Azys Lla","time":"Both"},{"name":"Paradise Found","zone":"Idyllshire","time":"Day"},
{"name":"Homestead","zone":"Idyllshire","time":"Night"},{"name":"Shelter","zone":"Sanctuary Theme","time":"Both"}]
const sbData = []
const shbData = []
const ewData = []

// music/logic tracking 
let currentSong = "Not Playing"
let isPlaying = false
let manualControl = false
let currentTime

// default values
let currentExpansion = "arr"
let currentExpansionSongs = arrData
let currentSongs = []
let currentZone = "None"
let isNight 

/*
 *
 * UPDATE FUNCTIONS
 * 
*/


// TODO TODO TODO TODO TODO
// change curent playing and figure out audio playing with howler

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
                 */
                if (!(itemChanged[item].oldValue == itemChanged[item].newValue)) {
                    currentSongs = []
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
                    currentSongs = currentSongs.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
                    browser.storage.local.set({"songsToPlay": currentSongs}) 
                    browser.storage.local.set({"songZone": currentSongs[0].zone})
                    browser.storage.local.set({"songName": currentSongs[0].name})
                }
                break
            case "expansion":
                /* 
                 * when expansion changes:
                 * 1. change currentExpansionSongs to the new expansion
                 * 2. grab the new songs based on isNight and add them to songsToPlay
                 * 3. adjust the current song playing to first item in songsToPlay
                 */
                browser.storage.local.get("expansion", (item) => {
                    switch (item.expansion) {
                        case "arr":
                            currentExpansionSongs = arrData
                            currentSongs = []
                            break
                        case "hw":
                            currentExpansionSongs = hwData
                            currentSongs = []
                            break
                        case "sb":
                            currentExpansionSongs = sbData
                            currentSongs = []
                            break
                        case "shb":
                            currentExpansionSongs = shbData
                            currentSongs = []
                            break
                        case "ew":
                            currentExpansionSongs = ewData
                            currentSongs = []
                            break
                    }
                    browser.storage.local.set({"currentExpansionSongs": currentExpansionSongs})
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
                    currentSongs = currentSongs.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
                    browser.storage.local.set({"songsToPlay": currentSongs}) 
                    browser.storage.local.set({"songZone": currentSongs[0].zone})
                    browser.storage.local.set({"songName": currentSongs[0].name})
                })
                break
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
