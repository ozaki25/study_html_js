var Users = require('./collections/Users.js');
var UsersView = require('./views/UsersView');

var users = new Users([
    {name: '大谷', team: '日本ハム', position: 'ピッチャー'},
    {name: '藤浪', team: '阪神', position: 'ピッチャー'},
    {name: '中田', team: '日本ハム', position: 'ファースト'},
    {name: '筒香', team: '横浜DeNA', position: 'レフト'}
]);
var usersView = new UsersView({collection: users});
usersView.render();
