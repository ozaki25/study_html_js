var Marionette = require('backbone.marionette');
var Users = require('../collections/Users');
var UsersView = require('./UsersView');
var DetailView = require('./DetailView');
var FormView = require('./FormView');
var TeamsView = require('./TeamsView');

module.exports = Marionette.LayoutView.extend({
    template: '#main_view',
    regions: {
        teams: '#teams',
        mainContent: '#main_content',
        newUser: '#new_user'
    },
    childEvents: {
        'show:detail': 'showUserDetail',
        'show:users': 'showUsers'
    },
    onRender: function() {
        var team = this.collection.models[0];
        var users = new Users(team.get('users'));
        this.teams.show(new TeamsView({collection: this.collection}));
        this.mainContent.show(new UsersView({collection: users, model: team}));
        this.newUser.show(new FormView({collection: this.collection}));
    },
    showUsers: function(childView) {
        var team = childView.model;
        var users = new Users(team.get('users'));
        this.mainContent.show(new UsersView({collection: users, model: team}));
    },
    showUserDetail: function(childView) {
        this.mainContent.show(new DetailView({model: childView.model}));
    }
});
