var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var NewUserView = require('./NewUserView');
var UserView = require('./UserView');

module.exports = Backbone.View.extend({
    el: '#users',
    template: _.template($('#users_view').html()),
    initialize: function () {
        this.listenTo(this.collection, 'all', this.render);
    },
    render: function() {
        this.$el.html(this.template());

        var newUserView = new NewUserView({collection: this.collection});
        newUserView.render();

        _(this.collection.models).each(function(user) {
            var userView = new UserView({model: user});
            $('#user_list').append(userView.render().el);
        }, this);
    }
});
