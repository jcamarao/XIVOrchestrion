/*
 *
 * EVENT LISTENERS
 *
*/

/* obtain and update the value for the current expansion */
document.getElementById("expansionSelect").addEventListener("change", function() {
    currentExpansion = this.value
    console.log(currentExpansion)
    updateSong(currentExpansion)
})

/* obtain and update the value if it's day/night based on the 6/6 EZT time cycle
 * day: 6am-5:59pm
 * night: 6pm - 5:59am
 */
 document.getElementById("dayNightToggle").addEventListener("change", function(event) {
    event.target.checked ? isDay = false : isDay = true
    console.log("Listener: " + isDay)
})