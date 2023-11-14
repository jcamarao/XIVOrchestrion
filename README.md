# XIVOrchestrion
Firefox extension that tracks your system's time to determine if it's day or night (according to EZT standards), and allows you to pick an expansion and play the themes from the overworld while you browse. Made with manifest v2 as manifest v3 makes extensions like this impossible to do functionally and reliably due to the service_worker and persistence changes (Sorry, Chrome!).

# Disclaimer
This is a passion project and is not affiliated with Square Enix. I do **NOT** own the audio.

FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.

FINAL FANTASY XIV © 2010-2023 SQUARE ENIX CO., LTD. All Rights Reserved.

# Making Edits
If you want to modify it or change how something works, do the following:
1. Clone the github repo with `git clone git@github.com:jcamarao/XIVOrchestrion.git`, fork, or download the repo as a .zip
2. In Firefox, type in `about:debugging#/runtime/this-firefox` into the URL
3. Click on `Load Temporary Add-on...` and load the `manifest.json`
4. Begin working!

Note: To refresh the extension after making changes, you can just click the `Reload` rather than removing the extension as a whole.
