// TODO TODO TODO TODO TODO
//  
// 1. work on volume bar
//

/* keep track of the changing variables in local storage and modify if new option is selected */
function listener(itemChanged) {
    const changedItems = Object.keys(itemChanged);
    for (const item of changedItems) {
        switch (item) { 
            case "songsToPlay":
                browser.storage.local.get("songsToPlay", (item) => {
                    if (item.songsToPlay.length == 0) {
                        createSongList()
                        browser.storage.local.set({"songsToPlay": currentSongs})
                    }
                })
                browser.storage.local.get("isPlaying", (state) => {
                    if (state.isPlaying) {
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
                    createSongList()
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
                        case "all":
                            currentExpansion = "all"
                            currentExpansionSongs = arrData
                            currentExpansionSongs = currentExpansionSongs.concat(hwData)
                            currentExpansionSongs = currentExpansionSongs.concat(sbData)
                            currentExpansionSongs = currentExpansionSongs.concat(shbData)
                            currentExpansionSongs = currentExpansionSongs.concat(ewData)
                            currentSongs = []
                            break
                    }
                    browser.storage.local.set({"currentExpansionSongs": currentExpansionSongs})
                    createSongList() 
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
            case "isLooping":
                browser.storage.local.get("isLooping", (item) => {
                    isLooping = item.isLooping
                })
        }
    }
}
browser.storage.local.onChanged.addListener(listener)