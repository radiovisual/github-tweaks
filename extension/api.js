(() => {
	'use strict';

	window.GitHubTweaks = (() => {
		const defaults = {
			urlColor: '#7a7b7a',
			urlHoverColor: 'inherit'
		};

		const api = {
			storage: {
				get: cb => {
					window.chrome.storage.sync.get(defaults, items => {
						cb(null, items);
					});
				},
				set: obj => {
					window.chrome.storage.sync.set(obj);
				}
			}
		};

		api.defaults = defaults;

		return api;
	})();
})();
