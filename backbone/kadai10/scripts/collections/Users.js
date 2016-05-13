var Backbone = require('backbone');
var LocalStorage = require('backbone.LocalStorage');
var User = require('../models/User');

module.exports = Backbone.Collection.extend({
    mdoel: User,
    localStorage: new LocalStorage('backbone_sample.users'),
    withTeam: function(team) {
        return this.where({team: team});
    }
});
