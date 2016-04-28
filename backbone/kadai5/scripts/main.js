var Users = require('./collections/Users.js');
var UsersView = require('./views/UsersView');

var users = new Users();
users.fetch().done(function() {
    var usersView = new UsersView({collection: users});
    usersView.render();
});
