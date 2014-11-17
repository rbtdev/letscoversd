import Ember from 'ember';

export default Ember.ObjectController.extend({
	areas: function () {
		return this.store.find('area');
	}.property(),

	newLocation: {},
	newArea: {},

	actions: {
		save: function (location) {
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address': location.get('address')}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
		            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
		              location.set('lat', results[0].geometry.location.lat());
		              location.set('lon', results[0].geometry.location.lng());
		              location.save();
		          	}
		        }
			});
			this.set('newLocation', {});
		},
	}
});