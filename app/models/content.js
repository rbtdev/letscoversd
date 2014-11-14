import DS from "ember-data";
var Content = DS.Model.extend({
	title: DS.attr('string'),
	text: DS.attr('string')
});
export default Content;