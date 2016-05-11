var Marionette = require('backbone.marionette');
var UsersView = require('./UsersView');
var FormView = require('./FormView');

module.exports = Marionette.LayoutView.extend({
    template: '#main_view',
    regions: {
        users: '#users',
        newUser: '#new_user'
    },
    onRender: function() {
        this.users.show(new UsersView({collection: this.collection}));
        this.newUser.show(new FormView({collection: this.collection}));
    }
});
