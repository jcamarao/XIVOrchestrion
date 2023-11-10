/*
 *
 * refreshers to pull current info from local storage
 * 
*/ 

/* obtain and update the value for the current song zone */
browser.storage.local.get("songZone", (item) => {
    document.getElementById("currentZone").innerHTML = item.songZone
})

/* obtain and update the value for the current song name */
browser.storage.local.get("songName", (item) => {
    document.getElementById("currentSong").innerHTML = item.songName
})

/* obtain and update the value for the current expansion */
browser.storage.local.get("expansion", (item) => {
    document.getElementById("expansionSelect").value = item.expansion
})

/* obtain and update the image if music is playing or not */
browser.storage.local.get("isPlaying", (item) => {
    if (item.isPlaying) {
        document.getElementById("playButton").src = "docs/pause.png"
    }
    else {
        document.getElementById("playButton").src = "docs/play.png"
    }
})

/* obtain and update the image if music is looping or not */
browser.storage.local.get("isLooping", (item) => {
    if (item.isLooping) {
        document.getElementById("loopTrigger").src = "docs/loopOn.png"
    }
    else {
        document.getElementById("loopTrigger").src = "docs/loopOff.png"
    }
})

/*
 *
 * event listeners to save (and or update) the settings and music
 * 
*/ 

/* obtain and update the value for if musicis playing or not */
document.getElementById("songButton").addEventListener("click", function() {
    browser.storage.local.get("isPlaying", (item) => {
        if (item.isPlaying) {
            browser.storage.local.set({"isPlaying": false})
        }
        else {
            browser.storage.local.set({"isPlaying": true})
        }
    })
})

/* obtain and update the value for if musicis playing or not */
document.getElementById("loopButton").addEventListener("click", function() {
    browser.storage.local.get("isLooping", (item) => {
        if (item.isLooping) {
            browser.storage.local.set({"isLooping": false})
        }
        else {
            browser.storage.local.set({"isLooping": true})
        }
    })
})

/* obtain and update the value for the current expansion */
document.getElementById("expansionSelect").addEventListener("change", function() {
    browser.storage.local.set({"expansion": expansionSelect.value})
})

/*
 *
 * listener to update live while having the extension open
 * 
*/ 
function listener(itemChanged) {
    const changedItems = Object.keys(itemChanged);
    for (const item of changedItems) {
        switch (item) {
            case "songName":
                document.getElementById("currentSong").innerHTML = itemChanged[item].newValue
                break
            case "songZone":
                document.getElementById("currentZone").innerHTML = itemChanged[item].newValue
                break
            case "isPlaying":
                if (itemChanged[item].newValue) {
                    document.getElementById("playButton").src = "docs/pause.png"
                }
                else {
                    document.getElementById("playButton").src = "docs/play.png"
                }
                break
            case "isLooping":
                if (itemChanged[item].newValue) {
                    document.getElementById("loopTrigger").src = "docs/loopOn.png"
                }
                else {
                    document.getElementById("loopTrigger").src = "docs/loopOff.png"
                }
                break
        }
    }
}
browser.storage.local.onChanged.addListener(listener)