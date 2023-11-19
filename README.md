# XIVOrchestrion
[Firefox Extension Page](https://addons.mozilla.org/en-US/firefox/addon/xivorchestrion/)

XIVOrchestrion is a Firefox extension that tracks your system's time to determine if it's day or night (according to EZT standards), and allows you to pick an expansion and play the themes from the overworld while you browse. Made with manifest v2 due to the manifest v3 changes with persistent scripts. 

I highly encourage you to buy the tracks. They're amazing.

You can find them here: [A Realm Reborn](https://na.store.square-enix-games.com/final-fantasy-xiv_-a-realm-reborn-original-soundtrack), [Heavensward](https://na.store.square-enix-games.com/heavensward_-final-fantasy_-xiv-original-soundtrack-_blu-ray_), [Stormblood](https://na.store.square-enix-games.com/final-fantasy-xiv_-stormblood-original-soundtrack), [Shadowbringers](https://na.store.square-enix-games.com/shadowbringers_-final-fantasy-xiv-original-soundtrack), [Endwalker](https://na.store.square-enix-games.com/final-fantasy-xiv_-endwalker-original-soundtrack-_blu-ray_)

Inspired by [Nook](https://addons.mozilla.org/en-US/firefox/addon/nook). A big thank you to everyone who helped me test it and assist in creating the icons. :)

# How it Works
[![XIVOrchestrion](https://markdown-videos-api.jorgenkh.no/url?url=https%3A%2F%2Fyoutu.be%2F382Mt75p2X8)](https://youtu.be/382Mt75p2X8)

XIVOrchestrion works by utilizing the browsers local storage by using `browser.storage.local` to keep track of states with listeners running in the background to keep things updated without needing the extension UI open. It also uses AWS CloudFront and S3 as the method of audio distribution to quickly load the themes regardless of where the user is located globally.

# Disclaimer
This is a passion project and is not affiliated with Square Enix. I do **NOT** own the audio.

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.

FINAL FANTASY XIV © 2010-2023 SQUARE ENIX CO., LTD. All Rights Reserved.

# Making Edits or Local Playing
If you want to get it working locally, do the following:
1. Clone the github repo with `git clone git@github.com:jcamarao/XIVOrchestrion.git`, fork, or download the repo as a .zip
2. In Firefox, type in `about:debugging#/runtime/this-firefox` into the URL
3. Click on `Load Temporary Add-on...` and load the `manifest.json`
4. Look at your extensions bar!

Note: To refresh the extension after making changes, you can just click the `Reload` rather than removing the extension as a whole.
