var _ = require('underscore');
var Backbone = require('backbone');
var LocalStorage = require('backbone.LocalStorage');
var Team = require('../models/Team');

module.exports = Backbone.Collection.extend({
    mdoel: Team,
    localStorage: new LocalStorage('backbone_sample.teams'),
    addDefaultTeams: function() {
        var teamList = ['日本ハム',
                        'ソフトバンク',
                        'ロッテ',
                        '西武',
                        'オリックス',
                        '楽天',
                        '横浜DeNA',
                        '阪神',
                        '巨人',
                        '広島',
                        'ヤクルト',
                        '中日'];
        _(teamList).each(function(team) {
            this.create({name: team, users: []});
        }.bind(this));
    }
});
