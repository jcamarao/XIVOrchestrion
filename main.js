// Baseline URL for requests
const baseURL = "https://d3o089717konbo.cloudfront.net"

// load in the data for music information mapping
const arrData = [{"name":"Wailers and Waterwheels","zone":"Gridania","time":"Day"},
{"name":"Dance of the Fireflies","zone":"Gridania","time":"Night"},{"name":"A New Hope","zone":"Ul\'Dah","time":"Day"},
{"name":"Sultana Dreaming","zone":"Ul\'Dah","time":"Night"},{"name":"I Am the Sea","zone":"Limsa Lominsa","time":"Day"},
{"name":"A Sailor Never Sleep","zone":"Limsa Lominsa","time":"Night"},{"name":"Frontiers Within","zone":"Mor Dhona","time":"Day"},
{"name":"Reflections","zone":"Mor Dhona","time":"Night"},{"name":"Serenity","zone":"The Black Shroud Field Theme","time":"Both"},
{"name":"To the Sun","zone":"Thanalan Field Theme","time":"Both"},{"name":"On Westerly Winds","zone":"La Noscea Field Theme","time":"Both"},
{"name":"Salt Swept","zone":"Sanctuary Theme","time":"Both"},{"name":"Ruby Sunrise","zone":"Sanctuary Theme","time":"Both"},
{"name":"The Gift of Life","zone":"Sanctuary Theme","time":"Both"}]
const hwData = [{"name":"Solid","zone":"Ishgard (Foundation)","time":"Day"},{"name":"Night in the Brume","zone":"Ishgard (Foundation)","time":"Night"},
{"name":"Nobility Obliges","zone":"Ishgard (Pillars)","time":"Day"},{"name":"Nobility Sleeps","zone":"Ishgard (Pillars)","time":"Night"},
{"name":"Against the Wind","zone":"Coerthas Western Highlands","time":"Day"},{"name":"Black and White","zone":"Coerthas Western Highlands","time":"Night"},
{"name":"Painted Foothills","zone":"The Dravanian Forelands","time":"Day"},{"name":"Painted Skies","zone":"The Dravanian Forelands","time":"Night"},
{"name":"Missing Pages","zone":"The Dravanian Hinterlands","time":"Day"},{"name":"The Silent Regard of Stars","zone":"The Dravanian Hinterlands","time":"Night"},
{"name":"Landlords","zone":"The Churning Mists","time":"Day"},{"name":"Skylords","zone":"The Churning Mists","time":"Night"},
{"name":"Lost in the Clouds","zone":"The Sea of Clouds","time":"Day"},{"name":"Close to the Heavens","zone":"The Sea of Clouds","time":"Night"},
{"name":"Order Yet Undeciphered","zone":"Azys Lla","time":"Both"},{"name":"Paradise Found","zone":"Idyllshire","time":"Day"},
{"name":"Homestead","zone":"Idyllshire","time":"Night"},{"name":"Safety in Numbers","zone":"Sanctuary Theme","time":"Both"},
{"name":"Contention","zone":"Sanctuary Theme","time":"Both"},{"name":"Shelter","zone":"Sanctuary Theme","time":"Both"}]
const sbData = [{"name":"Crimson Sunrise","zone":"Kugane","time":"Day"},{"name":"Crimson Sunset","zone":"Kugane","time":"Night"},
{"name":"Beyond The Wall","zone":"The Fringes","time":"Day"},{"name":"Hope Forgotten","zone":"The Fringes","time":"Night"},
{"name":"On High","zone":"The Peaks","time":"Day"},{"name":"The Stone Remembers","zone":"The Peaks","time":"Night"},
{"name":"Liquid Flame","zone":"The Ruby Sea","time":"Day"},{"name":"Westward Tide","zone":"The Ruby Sea","time":"Night"},
{"name":"A Father\'s Pride","zone":"Yanxia","time":"Day"},{"name":"A Mother\'s Pride","zone":"Yanxia","time":"Night"},
{"name":"Drowning in the Horizon","zone":"The Azim Steppe","time":"Day"},{"name":"He Rises Above","zone":"The Azim Steppe","time":"Night"},
{"name":"Songs of Salt and Sufferring","zone":"The Lochs","time":"Day"},{"name":"Old Wounds","zone":"The Lochs","time":"Night"},
{"name":"With Giants Watching","zone":"Sanctury Theme","time":"Both"},{"name":"Cradle","zone":"Sanctury Theme","time":"Both"},
{"name":"Harmony","zone":"Sanctury Theme","time":"Both"},{"name":"Impact","zone":"Rhalgr\'s Reach","time":"Day"},
{"name":"Afterglow","zone":"Rhalgr\'s Reach","time":"Night"},{"name":"Cyan\'s Theme","zone":"Doman Enclave","time":"Both"}]
const shbData = [{"name":"The Dark Which Illuminates the World","zone":"The Crystarium","time":"Day"},
{"name":"Knowledge Never Sleep","zone":"The Crystarium","time":"Night"},{"name":"The Source","zone":"Lakeland","time":"Day"},
{"name":"Unchanging, Everchanging","zone":"Lakeland","time":"Night"},{"name":"Sands of Amber","zone":"Amh Araeng","time":"Day"},
{"name":"Sands of Blood","zone":"Amh Araeng","time":"Night"},{"name":"A World Divided","zone":"Kholusia","time":"Day"},
{"name":"The Quick Way","zone":"Kholusia","time":"Night"},{"name":"Fierce and Free","zone":"Il Mheg","time":"Day"},
{"name":"The Faerie Ring","zone":"Il Mheg","time":"Night"},{"name":"Civilizations","zone":"The Rak\'Tika Greatwood","time":"Day"},
{"name":"A Hopeless Race","zone":"The Rak\'Tika Greatwood","time":"Night"},{"name":"Full Fathom Five","zone":"The Tempest","time":"Both"}
,{"name":"Indulgence","zone":"Eulmore","time":"Day"},{"name":"Masquerade","zone":"Eulmore","time":"Night"},
{"name":"'Neath Dark Waters","zone":"The Tempest (Amaurot)","time":"Both"},
{"name":"Whisper of the Land","zone":"Sanctuary","time":"Both"},{"name":"A Reason to Live","zone":"Sanctuary","time":"Both"},
{"name":"Such as it Is","zone":"Sanctuary","time":"Both"},{"name":"No Greater Sorrow","zone":"Sanctuary","time":"Both"}]
const ewData = [{"name":"The Ewer Brimmeth","zone":"Old Sharlayan","time":"Day"},{"name":"The Nautilus Knoweth","zone":"Old Sharlayan","time":"Night"},
{"name":"The Labyrinth","zone":"Labyrinthos","time":"Day"},{"name":"Dreams of Man","zone":"Labyrinthos","time":"Night"},
{"name":"Divine Words","zone":"Thavnair","time":"Day"},{"name":"Prayers Repeated","zone":"Thavnair","time":"Night"},
{"name":"White Snow, Black Steel","zone":"Garlemald","time":"Day"},{"name":"Black Steel, Cold Embers","zone":"Garlemald","time":"Night"},
{"name":"One Small Step","zone":"Mare Lamentorium","time":"Both"},
{"name":"Welcome to Our Town! (Endwalker)","zone":"Mare Lamentorium (Loporrit Areas)","time":"Both"},
{"name":"Sky Unsundered","zone":"Elpis","time":"Day"},{"name":"Stars Long Dead","zone":"Elpis","time":"Night"},
{"name":"Close in the Distance","zone":"Ultima Thule","time":"Both"},{"name":"Down the Up Staircase","zone":"Sanctuary","time":"Both"},
{"name":"Those We Can Yet Save","zone":"Sanctuary","time":"Both"},{"name":"And Love You Shall Find","zone":"Sanctuary","time":"Both"},
{"name":"Vibrant Voices","zone":"Rad-At-Han","time":"Day"},{"name":"Perfumed Eves","zone":"Radz-At-Han","time":"Night"}]

// music/logic tracking 
let howlSource
let currentSong
let isPlaying = false
let manualControl = false
let currentTime
const fade = 100
let volume = 1.0
let urlAppropriateName

// default values
let currentExpansion = "arr"
let currentExpansionSongs = arrData
let currentSongs = []
let isNight 

/*
 *
 * music handling functions
 * 
*/ 

function playSong(songArray) {
    isPlaying = true
    urlAppropriateName = songArray[0].name
    urlAppropriateName = urlAppropriateName.replaceAll(' ', '+')
    urlAppropriateName = urlAppropriateName.replaceAll(',', "%2C")
    let songUrl = `${baseURL}/${currentExpansion}/${urlAppropriateName}.ogg`
    if (currentSong.playing()) {
        currentSong.unload()
        howlSource = songArray[0].name
        currentSong = new Howl({
            src: [songUrl],
            html5: true,
            volume: 0,
            // Fires when the sound finishes playing.
            onend: () => {
                songArray.shift()
                browser.storage.local.set({"songsToPlay": songArray}) 
                currentSong.unload()
            },
            onpause: () => {
                console.log("song has been paused")
            }
          })
        currentSong.play()
        currentSong.fade(0, volume, fade)
    }
    else if (currentSong.state() == "loaded" || currentSong.state() == "loading") {
        browser.storage.local.get("songName", (item) => {
            if (howlSource != item.songName) {
                currentSong.unload()
                howlSource = songArray[0].name
                currentSong = new Howl({
                    src: [songUrl],
                    html5: true,
                    volume: 0,
                    // Fires when the sound finishes playing.
                    onend: () => {
                        songArray.shift()
                        browser.storage.local.set({"songsToPlay": songArray}) 
                        currentSong.unload()
                    },
                    onpause: () => {
                        console.log("song has been paused")
                    }
                  })
                currentSong.play()
                currentSong.fade(0, volume, fade)
            }
            else {
                currentSong.play()
                currentSong.fade(0, volume, fade)
            }
        })
    }
    else {
        howlSource = currentSongs[0].name
        currentSong = new Howl({
            src: [songUrl],
            htlm5: true,
            volume: 0,
            // Fires when the sound finishes playing.
            onend: () => {
                songArray.shift()
                browser.storage.local.set({"songsToPlay": songArray}) 
                currentSong.unload()
            },
            onpause: () => {
                console.log("song has been paused")
            },
          })
        currentSong.play()
        currentSong.fade(0, volume, fade)
    }
}

function pauseSong() {
    isPlaying = false
    if (currentSong == undefined) {
    }
    else {
        currentSong.fade(volume, 0, fade)
        currentSong.pause()
    }
}

/* continuously check on time for day/night time requirement */
function checkTime() {
    currentTime = new Date().getHours()
    currentTime >=18 && !(currentTime < 6) ? isNight = true : isNight = false
    browser.storage.local.set({"isNight": isNight})
}
setInterval(checkTime, 1000)
