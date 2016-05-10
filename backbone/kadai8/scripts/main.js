var Marionette = require('backbone.marionette');
var Users = require('./collections/Users');
var MainView = require('./views/MainView');

var users = new Users();
var app = new Marionette.Application({
    regions: {
        main: '#main'
    },
    onStart: function() {
        users.fetch().done(function() {
            this.main.show(new MainView({collection: users}));
        }.bind(this));
    }
});

app.start();
