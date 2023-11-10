// Baseline URL for requests
const baseURL = "https://d3o089717konbo.cloudfront.net"

// load in the data for music information mapping
const arrData = [{"name":"Wailers and Waterwheels","zone":"Gridania","time":"Day","expansion":"arr"},
{"name":"Dance of the Fireflies","zone":"Gridania","time":"Night","expansion":"arr"},
{"name":"A New Hope","zone":"Ul\'Dah","time":"Day","expansion":"arr"},{"name":"Sultana Dreaming","zone":"Ul\'Dah","time":"Night","expansion":"arr"},
{"name":"I Am the Sea","zone":"Limsa Lominsa","time":"Day","expansion":"arr"},{"name":"A Sailor Never Sleep","zone":"Limsa Lominsa","time":"Night","expansion":"arr"},
{"name":"Frontiers Within","zone":"Mor Dhona","time":"Day","expansion":"arr"},{"name":"Reflections","zone":"Mor Dhona","time":"Night","expansion":"arr"},
{"name":"Serenity","zone":"The Black Shroud Field Theme","time":"Both","expansion":"arr"},{"name":"To the Sun","zone":"Thanalan Field Theme","time":"Both","expansion":"arr"},
{"name":"On Westerly Winds","zone":"La Noscea Field Theme","time":"Both","expansion":"arr"},{"name":"Salt Swept","zone":"Sanctuary Theme","time":"Both","expansion":"arr"},
{"name":"Ruby Sunrise","zone":"Sanctuary Theme","time":"Both","expansion":"arr"},{"name":"The Gift of Life","zone":"Sanctuary Theme","time":"Both","expansion":"arr"}]
const hwData = [{"name":"Solid","zone":"Ishgard (Foundation)","time":"Day","expansion":"hw"},{"name":"Night in the Brume","zone":"Ishgard (Foundation)","time":"Night","expansion":"hw"},
{"name":"Nobility Obliges","zone":"Ishgard (Pillars)","time":"Day","expansion":"hw"},{"name":"Nobility Sleeps","zone":"Ishgard (Pillars)","time":"Night","expansion":"hw"},
{"name":"Against the Wind","zone":"Coerthas Western Highlands","time":"Day","expansion":"hw"},{"name":"Black and White","zone":"Coerthas Western Highlands","time":"Night","expansion":"hw"},
{"name":"Painted Foothills","zone":"The Dravanian Forelands","time":"Day","expansion":"hw"},{"name":"Painted Skies","zone":"The Dravanian Forelands","time":"Night","expansion":"hw"},
{"name":"Missing Pages","zone":"The Dravanian Hinterlands","time":"Day","expansion":"hw"},{"name":"The Silent Regard of Stars","zone":"The Dravanian Hinterlands","time":"Night","expansion":"hw"},
{"name":"Landlords","zone":"The Churning Mists","time":"Day","expansion":"hw"},{"name":"Skylords","zone":"The Churning Mists","time":"Night","expansion":"hw"},
{"name":"Lost in the Clouds","zone":"The Sea of Clouds","time":"Day","expansion":"hw"},{"name":"Close to the Heavens","zone":"The Sea of Clouds","time":"Night","expansion":"hw"},
{"name":"Order Yet Undeciphered","zone":"Azys Lla","time":"Both","expansion":"hw"},{"name":"Paradise Found","zone":"Idyllshire","time":"Day","expansion":"hw"},
{"name":"Homestead","zone":"Idyllshire","time":"Night","expansion":"hw"},{"name":"Safety in Numbers","zone":"Sanctuary Theme","time":"Both","expansion":"hw"},
{"name":"Contention","zone":"Sanctuary Theme","time":"Both","expansion":"hw"},{"name":"Shelter","zone":"Sanctuary Theme","time":"Both","expansion":"hw"}]
const sbData = [{"name":"Crimson Sunrise","zone":"Kugane","time":"Day","expansion":"sb"},{"name":"Crimson Sunset","zone":"Kugane","time":"Night","expansion":"sb"},
{"name":"Beyond the Wall","zone":"The Fringes","time":"Day","expansion":"sb"},{"name":"Hope Forgotten","zone":"The Fringes","time":"Night","expansion":"sb"},
{"name":"On High","zone":"The Peaks","time":"Day","expansion":"sb"},{"name":"The Stone Remembers","zone":"The Peaks","time":"Night","expansion":"sb"},
{"name":"Liquid Flame","zone":"The Ruby Sea","time":"Day","expansion":"sb"},{"name":"Westward Tide","zone":"The Ruby Sea","time":"Night","expansion":"sb"},
{"name":"A Father\'s Pride","zone":"Yanxia","time":"Day","expansion":"sb"},{"name":"A Mother\'s Pride","zone":"Yanxia","time":"Night","expansion":"sb"},
{"name":"Drowning in the Horizon","zone":"The Azim Steppe","time":"Day","expansion":"sb"},{"name":"He Rises Above","zone":"The Azim Steppe","time":"Night","expansion":"sb"},
{"name":"Songs of Salt and Suffering","zone":"The Lochs","time":"Day","expansion":"sb"},{"name":"Old Wounds","zone":"The Lochs","time":"Night","expansion":"sb"},
{"name":"With Giants Watching","zone":"Sanctury Theme","time":"Both","expansion":"sb"},{"name":"Cradle","zone":"Sanctury Theme","time":"Both","expansion":"sb"},
{"name":"Harmony","zone":"Sanctury Theme","time":"Both","expansion":"sb"},{"name":"Impact","zone":"Rhalgr\'s Reach","time":"Day","expansion":"sb"},
{"name":"Afterglow","zone":"Rhalgr\'s Reach","time":"Night","expansion":"sb"},{"name":"Cyan\'s Theme","zone":"Doman Enclave","time":"Both","expansion":"sb"}]
const shbData = [{"name":"The Dark Which Illuminates the World","zone":"The Crystarium","time":"Day","expansion":"shb"},{"name":"Knowledge Never Sleeps","zone":"The Crystarium","time":"Night","expansion":"shb"},
{"name":"The Source","zone":"Lakeland","time":"Day","expansion":"shb"},{"name":"Unchanging, Everchanging","zone":"Lakeland","time":"Night","expansion":"shb"},
{"name":"Sands of Amber","zone":"Amh Araeng","time":"Day","expansion":"shb"},{"name":"Sands of Blood","zone":"Amh Araeng","time":"Night","expansion":"shb"},
{"name":"A World Divided","zone":"Kholusia","time":"Day","expansion":"shb"},{"name":"The Quick Way","zone":"Kholusia","time":"Night","expansion":"shb"},
{"name":"Fierce and Free","zone":"Il Mheg","time":"Day","expansion":"shb"},{"name":"The Faerie Ring","zone":"Il Mheg","time":"Night","expansion":"shb"},
{"name":"Civilizations","zone":"The Rak\'Tika Greatwood","time":"Day","expansion":"shb"},{"name":"A Hopeless Race","zone":"The Rak\'Tika Greatwood","time":"Night","expansion":"shb"},
{"name":"Full Fathom Five","zone":"The Tempest","time":"Both","expansion":"shb"},{"name":"Indulgence","zone":"Eulmore","time":"Day","expansion":"shb"},
{"name":"Masquerade","zone":"Eulmore","time":"Night","expansion":"shb"},{"name":"\'Neath Dark Waters","zone":"The Tempest (Amaurot)","time":"Both","expansion":"shb"},
{"name":"Whisper of the Land","zone":"Sanctuary Theme","time":"Both","expansion":"shb"},{"name":"A Reason to Live","zone":"Sanctuary Theme","time":"Both","expansion":"shb"},
{"name":"Such as it Is","zone":"Sanctuary Theme","time":"Both","expansion":"shb"},{"name":"No Greater Sorrow","zone":"Sanctuary Theme","time":"Both","expansion":"shb"}]
const ewData = [{"name":"The Ewer Brimmeth","zone":"Old Sharlayan","time":"Day","expansion":"ew"},{"name":"The Nautilus Knoweth","zone":"Old Sharlayan","time":"Night","expansion":"ew"},
{"name":"The Labyrinth","zone":"Labyrinthos","time":"Day","expansion":"ew"},{"name":"Dreams of Man","zone":"Labyrinthos","time":"Night","expansion":"ew"},
{"name":"Divine Words","zone":"Thavnair","time":"Day","expansion":"ew"},{"name":"Prayers Repeated","zone":"Thavnair","time":"Night","expansion":"ew"},
{"name":"White Snow, Black Steel","zone":"Garlemald","time":"Day","expansion":"ew"},{"name":"Black Steel, Cold Embers","zone":"Garlemald","time":"Night","expansion":"ew"},
{"name":"One Small Step","zone":"Mare Lamentorium","time":"Both","expansion":"ew"},{"name":"Welcome to Our Town! (Endwalker)","zone":"Mare Lamentorium (Loporrit Areas)","time":"Both","expansion":"ew"},
{"name":"Sky Unsundered","zone":"Elpis","time":"Day","expansion":"ew"},{"name":"Stars Long Dead","zone":"Elpis","time":"Night","expansion":"ew"},
{"name":"Close in the Distance","zone":"Ultima Thule","time":"Both","expansion":"ew"},{"name":"Down the Up Staircase","zone":"Sanctuary Theme","time":"Both","expansion":"ew"},
{"name":"Those We Can Yet Save","zone":"Sanctuary Theme","time":"Both","expansion":"ew"},{"name":"And Love You Shall Find","zone":"Sanctuary Theme","time":"Both","expansion":"ew"},
{"name":"Vibrant Voices","zone":"Rad-At-Han","time":"Day","expansion":"ew"},{"name":"Perfumed Eves","zone":"Radz-At-Han","time":"Night","expansion":"ew"}]

// music/logic tracking 
let howlSource
let currentSong
let isLooping = false
let isPlaying = false
let currentTime
const fade = 100
let volume = 0.50
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
    let songUrl = `${baseURL}/${songArray[0].expansion}/${urlAppropriateName}.ogg`
    if (currentSong.playing()) {
        currentSong.unload()
        howlSource = songArray[0]
        currentSong = new Howl({
            src: [songUrl],
            html5: true,
            volume: 0,
            // Fires when the sound finishes playing.
            onend: () => {
                if (isLooping) {
                    currentSong.play()
                    currentSong.fade(0, volume, fade)
                }
                else {
                    songArray.shift()
                    browser.storage.local.set({"songsToPlay": songArray}) 
                    currentSong.unload()
                }
            }
          })
        currentSong.play()
        currentSong.fade(0, volume, fade)
    }
    else if (currentSong.state() == "loaded" || currentSong.state() == "loading") {
        browser.storage.local.get("songName", (item) => {
            if (howlSource.name != item.songName) {
                currentSong.unload()
                howlSource = songArray[0]
                currentSong = new Howl({
                    src: [songUrl],
                    html5: true,
                    volume: 0,
                    // Fires when the sound finishes playing.
                    onend: () => {
                        if (isLooping) {
                            currentSong.play()
                            currentSong.fade(0, volume, fade)
                        }
                        else {
                            songArray.shift()
                            browser.storage.local.set({"songsToPlay": songArray}) 
                            currentSong.unload()
                        }
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
        howlSource = currentSongs[0]
        currentSong = new Howl({
            src: [songUrl],
            htlm5: true,
            volume: 0,
            // Fires when the sound finishes playing.
            onend: () => {
                if (isLooping) {
                    currentSong.play()
                    currentSong.fade(0, volume, fade)
                }
                else {
                    songArray.shift()
                    browser.storage.local.set({"songsToPlay": songArray}) 
                    currentSong.unload()
                }
            }
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

/* often repeated actions */
function createSongList() {
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
}

/* continuously check on time for day/night time requirement */
function checkTime() {
    currentTime = new Date().getHours()
    currentTime >=18 && !(currentTime < 6) ? isNight = true : isNight = false
    browser.storage.local.set({"isNight": isNight})
}
setInterval(checkTime, 1000)
