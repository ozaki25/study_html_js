var _ = require('underscore');
var Marionette = require('backbone.marionette');
var UsersView = require('./UsersView');
var DetailView = require('./DetailView');
var FormView = require('./FormView');

module.exports = Marionette.LayoutView.extend({
    template: '#main_view',
    regions: {
        users: '#users',
        userDetail: '#user_detail',
        newUser: '#new_user'
    },
    childEvents: {
        'show:detail': 'showDetail',
        'refresh:detail': 'refreshDetail'
    },
    onRender: function() {
        var users = this.collection;
        if(_(users.models).isEmpty()) users.addDefaultUser();
        this.users.show(new UsersView({collection: users}));
        this.userDetail.show(new DetailView({model: _(users.models).first()}));
        this.newUser.show(new FormView({collection: users}));
    },
    showDetail: function(childView) {
        this.userDetail.show(new DetailView({model: childView.model}));
    },
    refreshDetail: function() {
        this.userDetail.show(new DetailView({model: _(this.collection.models).first()}));
    }
});
