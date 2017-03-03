'use strict';
const isHexColor = require('./validations').isHexColor;

let urlColorInput;
const $ = document.querySelector.bind(document);

document.addEventListener('DOMContentLoaded', () => {
	urlColorInput = $('#urlColor');
	urlColorInput.addEventListener('change', saveOptions);

	restoreOptions();
});

function saveOptions() {
	const urlColor = urlColorInput.value;

	if (isHexColor(urlColor)) {
		window.GitHubTweaks.storage.set({urlColor});
	} else {
		// report the error to the screen
		console.error('stop');
	}
}

function restoreOptions() {
	window.GitHubTweaks.storage.get((err, items) => {
		if (err) {
			throw err;
		}

		urlColorInput.value = items.urlColor;
	});
}
