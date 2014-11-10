import Ember from 'ember';

export default Ember.ArrayController.extend({
	newArea: {},

	actions: {
		addArea: function () {
			var newArea = this.get('newArea');
			this.store.createRecord('area', newArea).save();
		}
	}
});