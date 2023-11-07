/* check if default local storage variables are set and adjust accordingly */ 

if (isNight == undefined) {
    // set the default for time
    currentTime = new Date().getHours()
    currentTime >=18 && !(currentTime < 6)  ? isNight = true : isNight = false
    browser.storage.local.set({"isNight": isNight})

    // set the defaults for the expansion
    browser.storage.local.set({"expansion": "arr"})

    // set the default for the songs in current expansion
    browser.storage.local.set({"currentExpansionSongs": currentExpansionSongs})

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
}