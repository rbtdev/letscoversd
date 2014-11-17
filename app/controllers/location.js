import Ember from 'ember';
export default Ember.ObjectController.extend({
	actions: {

		delete: function () {
			this.get('content').destroyRecord();
		}
	}
});