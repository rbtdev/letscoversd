import Ember from "ember";

var LocationsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('location');
	}
});

export default LocationsRoute;