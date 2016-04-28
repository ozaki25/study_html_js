var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var User = require('../models/User');

module.exports = Backbone.View.extend({
    el: '#user_form',
    template: _.template($('#form_view').html()),
    events: {
        'click #add_user': 'addUser'
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    addUser: function() {
        var name = $('input#name').val().trim();
        var team = $('input#team').val().trim();
        var position = $('input#position').val().trim();
        var user = new User();
        if(name) user.set('name', name);
        if(team) user.set('team', team);
        if(position) user.set('position', position);
        this.collection.create(user);
    }
});

