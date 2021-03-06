'use strict';

function getStyleElement(css) {
	const style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	return style;
}

function injectStyles() {
	window.GitHubTweaks.storage.get((err, items) => {
		if (err) {
			throw err;
		}

		const css = `
		a {
			color: ${items.urlColor};
		}`;

		const style = getStyleElement(css);
		document.head.appendChild(style);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	injectStyles();
});
