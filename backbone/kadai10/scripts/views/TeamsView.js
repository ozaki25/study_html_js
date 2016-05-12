var Marionette = require('backbone.marionette');
var TeamView = require('./TeamView');

module.exports = Marionette.CompositeView.extend({
    childView: TeamView,
    childViewContainer: '#team_list',
    template: '#teams_view'
});
