var Marionette = require('backbone.marionette');
var Validation = require('backbone.validation');
var User = require('../models/User');

module.exports = Marionette.ItemView.extend({
    template: '#form_view',
    ui: {
        inputName: 'input#name',
        inputTeam: 'input#team',
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
    initialize: function() {
        this.model = new User();
        Validation.bind(this);
    },
    addUser: function() {
        var name = this.ui.inputName.val().trim();
        var team = this.ui.inputTeam.val().trim();
        var age = this.ui.inputAge.val().trim();
        var number = this.ui.inputNumber.val().trim();
        var position = this.ui.inputPosition.val().trim();
        var career = this.ui.inputCareer.val().trim();
        var title = this.ui.inputTitle.val().trim();
        var attributes = {}

        this.model.set({
            name: name,
            team: team,
            age: age,
            number: number,
            position: position,
            career: career,
            title: title
        });
        if(this.model.isValid(true)){
            this.collection.create(this.model);
            this.ui.inputs.val('');
        } else {
            
        }
    }
});

