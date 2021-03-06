var Marionette = require('backbone.marionette');
var Users = require('./collections/Users');
var HeaderView = require('./views/HeaderView');
var UsersView = require('./views/UsersView');
var FormView = require('./views/FormView');

var users = new Users();

var app = new Marionette.Application({
    regions: {
        header: '#header',
        users: '#users',
        newUser: '#new_user'
    },
    onStart: function() {
        users.fetch().done(function() {
            this.header.show(new HeaderView());
            this.users.show(new UsersView({collection: users}));
            this.newUser.show(new FormView({collection: users}));
        }.bind(this));
    }
});

app.start();
