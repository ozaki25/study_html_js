var _ = require('underscore');
var Marionette = require('backbone.marionette');
var FormView = require('./FormView');
var UserView = require('./UserView');

module.exports = Marionette.ItemView.extend({
    el: '#users',
    template: '#users_view',
    ui: {
        userList: '#user_list'
    },
    collectionEvents: {
        'update': 'render'
    },
    onRender: function() {
        var formView = new FormView({collection: this.collection});
        formView.render();

        _(this.collection.models).each(function(user) {
            var userView = new UserView({model: user});
            this.ui.userList.append(userView.render().el);
        }, this);
    }
});
