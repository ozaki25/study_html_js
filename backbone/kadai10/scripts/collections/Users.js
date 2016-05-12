var _ = require('underscore');
var Backbone = require('backbone');
var LocalStorage = require('backbone.LocalStorage');
var User = require('../models/User');
var Teams = require('../collections/Teams');

module.exports = Backbone.Collection.extend({
    mdoel: User,
    localStorage: new LocalStorage('backbone_sample'),
    getTeams: function() {
        var teamList = _(this.pluck('team')).chain().uniq().compact().value();
        var teams = new Teams(
            _(teamList).map(function(team){
                return {team: team}
            })
        );
        return teams;
    }
});
