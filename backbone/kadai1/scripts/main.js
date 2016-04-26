var $ = jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Bootstrap = require('bootstrap');
var Users = require('./collections/Users.js');
var UsersView = require('./views/UsersView');

var users = new Users([
    {id: 1, name: '大谷', team: '日本ハム', position: 'ピッチャー'},
    {id: 2, name: '藤浪', team: '阪神', position: 'ピッチャー'},
    {id: 3, name: '中田', team: '日本ハム', position: 'ファースト'},
    {id: 4, name: '筒香', team: '横浜DeNA', position: 'レフト'}
]);
var usersView = new UsersView({collection: users});
usersView.render();
