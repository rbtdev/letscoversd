var App = (App || {});
App.api = {
	offLine: false,
	url: '/api/',
	findAll: function (resource, resolve, reject) {
		var _resolve = resolve;
		var _reject = reject;
		$.ajax(this.url + resource).then (
			function(data) {
			_resolve(JSON.parse(data));
			},
			function() {
			reject();
			}
		 );
	}
};