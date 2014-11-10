import Ember from "ember";

var AreasRoute = Ember.Route.extend({
	model: function() {
    	return this.store.find('area');
	}
});

export default AreasRoute;