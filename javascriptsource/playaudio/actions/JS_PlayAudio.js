// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Either set the Url attribute (must link to an audio file) or pass an object of file document which contains an audio file.
 * @param {MxObject} file
 * @param {string} url
 * @returns {Promise.<string>}
 */
export async function JS_PlayAudio(file, url) {
	// BEGIN USER CODE
	let filepath = null;
	if (url) {
		filepath = url;
	} else {
		if (!file) {
			return Promise.reject(new Error("Input parameter 'file' is required"));
		}
		if (!file.inheritsFrom("System.FileDocument")) {
			const entity = file.getEntity();
			return Promise.reject(new Error(`Entity ${entity} does not inherit from 'System.FileDocument'`));
		}
		const guid = file.getGuid();
		const changedDate = file.get("changedDate");
		filepath = "/file?guid=" + guid + "&changedDate=" + changedDate;
	}
	const audio = document.createElement('audio');
	audio.src = filepath;
	audio.play();

	// Append the audio element for pause functionality (number should increment).
	const audioNumber = document.getElementsByTagName('audio').length + 1;
	const audioId = "audio" + audioNumber;
	audio.setAttribute("id", audioId);
	document.body.appendChild(audio);

	return audioId;
	// END USER CODE
}
