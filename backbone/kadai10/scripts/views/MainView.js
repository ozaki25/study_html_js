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
        'show:detail': 'changeDetail'
    },
    onRender: function() {
        this.users.show(new UsersView({collection: this.collection}));
        this.userDetail.show(new DetailView({model: this.collection.models[0]}));
        this.newUser.show(new FormView({collection: this.collection}));
    },
    changeDetail: function(childView) {
        this.userDetail.show(new DetailView({model: childView.model}));
    }
});
