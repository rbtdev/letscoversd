import Ember from 'ember';
export default Ember.ObjectController.extend({
	actions: {
		save: function () {
			this.get('content').save();
		},
		delete: function () {
			this.get('content').destroyRecord();
		}
	}
});