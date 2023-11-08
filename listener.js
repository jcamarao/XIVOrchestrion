// TODO TODO TODO TODO TODO
// 
// FUTURE ME: TEST PLAY SONG AUTOMATICALLY AFTER DONE, IF IT DOESN'T WORK, DO #1
//
// 1. listen for songName change and check if isPlaying, if true playSong()
// 2. save current time in song, if paused then play from paused time in song
//

/* keep track of the changing variables in local storage and modify if new option is selected */
function listener(itemChanged) {
    const changedItems = Object.keys(itemChanged);
    for (const item of changedItems) {
        switch (item) {
            case "songsToPlay":
                browser.storage.local.get("isPlaying", (state) => {
                    if (state.isPlaying) {
                        howlSource = currentSongs[0].name
                        browser.storage.local.set({"songName": currentSongs[0].name})
                        browser.storage.local.set({"songZone": currentSongs[0].zone})
                        playSong(currentSongs)
                    }
                    })
                break
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
                    browser.storage.local.set({"songName": currentSongs[0].name})
                    browser.storage.local.set({"songZone": currentSongs[0].zone})
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
                            currentExpansion = "arr"
                            currentExpansionSongs = arrData
                            currentSongs = []
                            break
                        case "hw":
                            currentExpansion = "hw"
                            currentExpansionSongs = hwData
                            currentSongs = []
                            break
                        case "sb":
                            currentExpansion = "sb"
                            currentExpansionSongs = sbData
                            currentSongs = []
                            break
                        case "shb":
                            currentExpansion = "shb"
                            currentExpansionSongs = shbData
                            currentSongs = []
                            break
                        case "ew":
                            currentExpansion = "ew"
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
                    browser.storage.local.get("isPlaying", (item) => {
                        if (item.isPlaying) {
                            playSong(currentSongs)
                        }
                    })
                })
                break
            case "isPlaying":
                browser.storage.local.get("isPlaying", (item) => {
                if (item.isPlaying) {
                    playSong(currentSongs)
                }
                else {
                    pauseSong()
                }
                })
                break
        }
    }
}
browser.storage.local.onChanged.addListener(listener)