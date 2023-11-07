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

/*
 *
 * event listeners to save (and or update) the settings and music
 * 
*/ 

/* obtain and update the value for the current expansion */
document.getElementById("expansionSelect").addEventListener("change", function() {
    browser.storage.local.set({"expansion": expansionSelect.value})
})

/* obtain and update the value if it's day/night based on the 6/6 EZT time cycle
 * day: 6am-5:59pm
 * night: 6pm - 5:59am
 */
 document.getElementById("dayNightToggle").addEventListener("change", function(event) {
    browser.storage.local.get("expansion", (item) => {
        document.getElementById("dayNightToggle").checked = item.value
    })
})

/* set the toggle accordingly to current time when opening pop-up */
browser.storage.local.get("isNight", (item) => {
    item.isNight ? document.getElementById("dayNightToggle").checked = true : document.getElementById("dayNightToggle").checked = false
})

/*
 *
 * update function when changing expansions
 * 
*/ 
function updateMusic() {
    // update UI to have the new song info
    browser.storage.local.get("songZone", (item) => {
        document.getElementById("currentZone").innerHTML = item.songZone
    })
    
    /* obtain and update the value for the current song name */
    browser.storage.local.get("songName", (item) => {
        document.getElementById("currentSong").innerHTML = item.songName
    })
}

function listener(itemChanged) {
    const changedItems = Object.keys(itemChanged);
    for (const item of changedItems) {
        console.log(item)
        switch (item) {
            case "songName":
                document.getElementById("currentSong").innerHTML = itemChanged[item].newValue
                break
            case "songZone":
                document.getElementById("currentZone").innerHTML = itemChanged[item].newValue
                break
        }
    }
}
browser.storage.local.onChanged.addListener(listener)