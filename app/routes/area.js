import Ember from "ember";

var AreaRoute = Ember.Route.extend({
	model: function(params) {
    	return this.store.find('area', params.id);
  }
});

export default AreaRoute;