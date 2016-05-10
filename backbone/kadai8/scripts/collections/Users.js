var Backbone = require('backbone');
var LocalStorage = require('backbone.LocalStorage');
var User = require('../models/User');

module.exports = Backbone.Collection.extend({
    mdoel: User,
    localStorage: new LocalStorage('backbone_sample'),
    addDefaultUser: function() {
        this.create({
            name: '大谷 翔平',
            team: '北海道日本ハムファイターズ',
            age: 21,
            number: 11,
            position: '投手',
            career: '花巻東ー日本ハム',
            title: '最優秀防御率、最多勝、最高勝率'
        });
    }
});
