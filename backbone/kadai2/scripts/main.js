var $ = jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Users = require('./collections/Users.js');
var UsersView = require('./views/UsersView');

var users = new Users([
    {name: '大谷'},
    {name: '藤浪'},
    {name: '中田'},
    {name: '筒香'}
]);
var usersView = new UsersView({collection: users});
usersView.render();
