'use strict';
let urlColorInput;
let urlHoverColorInput;
const $ = document.querySelector.bind(document);

document.addEventListener('DOMContentLoaded', () => {
	urlColorInput = $('#urlColor');
	urlHoverColorInput = $('#hoverColor');

	urlColorInput.addEventListener('change', saveOptions);
	urlHoverColorInput.addEventListener('change', saveOptions);

	restoreOptions();
});

function saveOptions() {
	const urlColor = urlColorInput.value;
	const urlHoverColor = urlHoverColorInput.value;
	window.GitHubTweaks.storage.set({urlColor, urlHoverColor});
}

function restoreOptions() {
	window.GitHubTweaks.storage.get((err, items) => {
		if (err) {
			throw err;
		}

		urlColorInput.value = items.urlColor;
		urlHoverColorInput.value = items.urlHoverColor;
	});
}
