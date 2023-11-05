/*
 *
 * EVENT LISTENERS
 *
*/

/* obtain and update the value for the current expansion */
document.getElementById("expansionSelect").addEventListener("change", function() {
    currentExpansion = this.value
    updateExpansion(currentExpansion)
})

/* obtain and update the value if it's day/night based on the 6/6 EZT time cycle
 * day: 6am-5:59pm
 * night: 6pm - 5:59am
 */
 document.getElementById("dayNightToggle").addEventListener("change", function(event) {
    event.target.checked ? isNight = false : isNight = true
})

/*
 *
 * SETTERS
 * 
*/ 

/* set the toggle accordingly to current time when opening pop-up */
if (isNight) {
    document.getElementById("dayNightToggle").checked = true
}
else {
    document.getElementById("dayNightToggle").checked = false
}
console.log(document.getElementById("dayNightToggle").checked )