import Ember from "ember";

var LocationRoute = Ember.Route.extend({
	model: function(params) {
    	return this.store.find('location', params.id);
	}
});

export default LocationRoute;