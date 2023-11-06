/* obtain and update the value for the current expansion */
document.getElementById("expansionSelect").addEventListener("change", function() {
    browser.storage.local.set({"expansion": this.value});
    browser.storage.local.get("expansion", (item) => {
        currentExpansion = item.expansion
        updateExpansion(currentExpansion)
    })
})

/* obtain and update the value if it's day/night based on the 6/6 EZT time cycle
 * day: 6am-5:59pm
 * night: 6pm - 5:59am
 */
 document.getElementById("dayNightToggle").addEventListener("change", function(event) {
    browser.storage.local.get("expansion", (item) => {
        currentExpansion = item.expansion
        updateExpansion(currentExpansion)
    })
})

/* set the toggle accordingly to current time when opening pop-up */
if (isNight) {
    console.log(isNight)
    document.getElementById("dayNightToggle").checked = true
}
else {
    console.log(isNight)
    document.getElementById("dayNightToggle").checked = false
}