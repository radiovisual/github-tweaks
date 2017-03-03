'use strict';
let urlColorInput;

document.addEventListener('DOMContentLoaded', () => {
	urlColorInput = document.querySelector('#urlColor');
	urlColorInput.addEventListener('change', saveOptions);
	restoreOptions();
});

function saveOptions() {
	const urlColor = urlColorInput.value;
	window.GitHubTweaks.storage.set({urlColor});
}

function restoreOptions() {
	window.GitHubTweaks.storage.get((err, items) => {
		if (err) {
			throw err;
		}
		urlColorInput.value = items.urlColor;
	});
}
