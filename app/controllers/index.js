import Ember from 'ember';
export default Ember.ObjectController.extend({
	locations: function () {
		return this.store.find('area');
	}.property()

});