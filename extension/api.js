(() => {
	'use strict';

	window.GitHubTweaks = (() => {
		const defaults = {
			urlColor: '#3689d6',
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
