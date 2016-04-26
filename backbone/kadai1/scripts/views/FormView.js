var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

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
        var name = $('input#name').val();
        var team = $('input#team').val();
        var position = $('input#position').val();
        this.collection.add({name: name, team: team, position: position});
    }
});

