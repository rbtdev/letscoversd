import Ember from 'ember';

export default Ember.ObjectController.extend({
	newLocation: {},
	newArea: {},

	actions: {
		addLocation: function () {
			var newLocation = this.get('newLocation');
			newLocation.area = this.get('content');
			this.store.createRecord('location', newLocation).save();
			this.set('newLocation', {});
		},
		deleteLocation: function (location) {
			location.destroyRecord();
		}
	}
});