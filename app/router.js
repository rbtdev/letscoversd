import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('locations');
	this.resource('location', { 'path' : 'locations/:id' });
	this.resource('areas');
	this.resource('area', { 'path' : 'areas/:id' });
});

export default Router;
