import Ember from 'ember';

export default Ember.ArrayController.extend({
	newLocation: {},
	actions: {
		add: function () {
			this.store.createRecord('location', this.get('newLocation')).save();
			this.set('newLocation', {});
		},
		save: function (location) {
			debugger
		}
	},
});