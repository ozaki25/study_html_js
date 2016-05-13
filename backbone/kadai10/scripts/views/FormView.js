var _ = require('underscore');
var Marionette = require('backbone.marionette');
var User = require('../models/User');

module.exports = Marionette.ItemView.extend({
    template: '#form_view',
    ui: {
        inputName: 'input#name',
        selectTeam: 'select#team',
        inputAge: 'input#age',
        inputNumber: 'input#number',
        inputPosition: 'input#position',
        inputCareer: 'input#career',
        inputTitle: 'input#title',
        inputs: 'input'
    },
    events: {
        'click #add_user': 'addUser'
    },
    templateHelpers: function () {
        return {
            selectTeam: function() {
                var teamList =  _(this.collection.models).map(function(team) {
                    return '<option value="' + team.get('name') + '">' + team.get('name') + '</option>';
                });
                return teamList.join('');
            }.bind(this)
        }
    },
    addUser: function() {
        var name = this.ui.inputName.val().trim();
        var team = this.ui.selectTeam.children(':selected').val();
        var age = this.ui.inputAge.val().trim();
        var number = this.ui.inputNumber.val().trim();
        var position = this.ui.inputPosition.val().trim();
        var career = this.ui.inputCareer.val().trim();
        var title = this.ui.inputTitle.val().trim();
        var user = new User();
        if(name) user.set('name', name);
        if(team) user.set('team', team);
        if(age) user.set('age', age);
        if(number) user.set('number', number);
        if(position) user.set('position', position);
        if(career) user.set('career', career);
        if(title) user.set('title', title);

        var model = this.collection.findWhere({name: team});
        model.get('users').push(user)
        model.save();

        this.ui.inputs.val('');
    }
});

