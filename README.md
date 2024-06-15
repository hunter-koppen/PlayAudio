## PlayAudio
Module to play audio in the background or with an audio player.

## Features
- Play sound in the background
- Pause background sound
- Use audio player
- Play sound by url or file

## Usage
First determine if you wish to use the player (widget) or if you wish to simply run some audio in the background.

Background usage:
- Create a nanoflow and add the play audio javascript action to it.
- Either use an url or a file as a parameter for the js action. You can leave the other parameter empty.
- If you wish to pause the sound later on you can use the audioId which is returned from the JS action and put this in the pause JS action to stop the audio.

Audio Player usage:
- Add the widget to the page and provide it with either a url or a file document containing a valid audio file.
- If you use the file document you might have problems with the fast forward/backward functionality. This is because Mendix does not set the correct headers for file to make sure this doesnt happen.
If you really want it to work based on your own files you will have to setup a published rest service inside your mendix app and return all the correct headers together with the file you wish to play in combination with the url property.

## Issues, suggestions and feature requests
https://github.com/hunter-koppen/PlayAudio/issues