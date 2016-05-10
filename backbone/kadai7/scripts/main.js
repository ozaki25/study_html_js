var Marionette = require('backbone.marionette');
var Users = require('./collections/Users.js');
var UsersView = require('./views/UsersView');
var FormView = require('./views/FormView');

var users = new Users([
    {name: '大谷', team: '日本ハム', position: 'ピッチャー'},
    {name: '藤浪', team: '阪神', position: 'ピッチャー'},
    {name: '中田', team: '日本ハム', position: 'ファースト'},
    {name: '筒香', team: '横浜DeNA', position: 'レフト'}
]);

var app = new Marionette.Application({
    regions: {
        users: '#users',
        newUser: '#new_user'
    },
    onStart: function() {
        this.users.show(new UsersView({collection: users}));
        this.newUser.show(new FormView({collection: users}));
    }
});

app.start();
