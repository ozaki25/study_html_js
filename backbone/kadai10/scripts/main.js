var Marionette = require('backbone.marionette');
var Teams = require('./collections/Teams');
var HeaderView = require('./views/HeaderView');
var MainView = require('./views/MainView');

var teams = new Teams();
var app = new Marionette.Application({
    regions: {
        header: '#header',
        main: '#main'
    },
    onStart: function() {
        teams.fetch().done(function() {
            if(!teams.models.length) teams.addDefaultTeams();
            this.header.show(new HeaderView());
            this.main.show(new MainView({collection: teams}));
        }.bind(this));
    }
});

app.start();
