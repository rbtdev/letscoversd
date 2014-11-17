import Ember from 'ember';

export default Ember.Component.extend({
  map: null,
  location: null,
  locations: [],
  marker: null,
  zoom:5,
	insertMap: function() {
    var container =  this.$(".map-canvas");
    var options = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
      navigationControl: true
    };
    this.set('map', new google.maps.Map(container[0], options));

    if (this.get('location')) {
      this.setLocation();
    }
    else if (this.get('locations')) {
      this.setLocations();
    }
    if (this.get('track')) {
        this.trackLocation();
    } 
 	}.on('didInsertElement'),

  setLocation: function () {
    this.set('locations', []);
    this.get('locations').pushObject(this.get('location'));
    this.setLocations();
  },

  setLocations: function () {
    var map = this.get('map');
    var bounds = new google.maps.LatLngBounds();
    var locations = this.get('locations');
    for (var i = 0; i< locations.length; i++) {
      var location = locations[i];
      var position = new google.maps.LatLng(location.get('lat'), location.get('lon'));
      var marker = new google.maps.Marker(
        {
           position: position,
           map: map
        });
      bounds.extend(marker.position);
      google.maps.event.addListener(marker, 'click', this.setMarkerDetails(location));
      if (locations.length == 1) {
        this.set('selectedLocation', location);
        this.displayRoute(location);
      }
    }
    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
       var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
       var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
       bounds.extend(extendPoint1);
       bounds.extend(extendPoint2);
    }
    this.get('map').fitBounds(bounds);

  },

  trackLocation: function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(this))
        navigator.geolocation.watchPosition(this.setCurrentLocation.bind(this));
    }
    else {
      console.log('no geolocation available');
    }
  },

  setCurrentLocation: function(position) {
      console.log('geolocation: ' + position.coords.latitude + ", " + position.coords.longitude);
      this.get('map').setCenter(new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude));
  },

  setMarkerDetails: function (location) {
    return function () {
      this.set('selectedLocation', location);
    }.bind(this)
  },

  selectLocation: function (location) {
    this.set('selectedLocation', location);
  },

  clearLocation: function () {
    this.set('selectedLocation', null);
  },

  displayRoute: function (location) {

    if (navigator.geolocation) {
       var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
          var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          var end = new google.maps.LatLng(location.get('lat'), location.get('lon'));

          var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
          directionsDisplay.setMap(_this.get('map')); // map should be already initialized.
          directionsDisplay.setPanel(_this.$(".map-directions")[0]);

          var request = {
              origin : start,
              destination : end,
              travelMode : google.maps.TravelMode.DRIVING
          };
          var directionsService = new google.maps.DirectionsService()
          directionsService.route(request, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                  directionsDisplay.setDirections(response);
              }
          });
        });
    }
  }
});

