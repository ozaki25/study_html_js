var _ = require('underscore');
var Marionette = require('backbone.marionette');
var UserView = require('./UserView');

module.exports = Marionette.ItemView.extend({
    template: '#users_view',
    ui: {
        userList: '#user_list'
    },
    collectionEvents: {
        'update': 'render'
    },
    onRender: function() {
        _(this.collection.models).each(function(user) {
            var userView = new UserView({model: user});
            this.ui.userList.append(userView.render().el);
        }, this);
    }
});
