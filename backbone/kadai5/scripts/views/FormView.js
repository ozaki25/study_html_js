var Marionette = require('backbone.marionette');
var User = require('../models/User');

module.exports = Marionette.ItemView.extend({
    el: '#user_form',
    template: '#form_view',
    ui: {
        inputName: 'input#name',
        inputTeam: 'input#team',
        inputPosition: 'input#position'
    },
    events: {
        'click #add_user': 'addUser'
    },
    addUser: function() {
        var name = this.ui.inputName.val().trim();
        var team = this.ui.inputTeam.val().trim();
        var position = this.ui.inputPosition.val().trim();
        var user = new User();
        if(name) user.set('name', name);
        if(team) user.set('team', team);
        if(position) user.set('position', position);
        this.collection.create(user);
    }
});

