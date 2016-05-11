var Marionette = require('backbone.marionette');
var Users = require('./collections/Users');
var HeaderView = require('./views/HeaderView');
var MainView = require('./views/MainView');

var users = new Users();
var app = new Marionette.Application({
    regions: {
        header: '#header',
        main: '#main'
    },
    onStart: function() {
        users.fetch().done(function() {
            this.header.show(new HeaderView());
            this.main.show(new MainView({collection: users}));
        }.bind(this));
    }
});

app.start();
