var _ = require('underscore');
var Marionette = require('backbone.marionette');
var UserView = require('./UserView');

module.exports = Marionette.CompositeView.extend({
    tagName: 'div',
    className: 'panel panel-info',
    childView: UserView,
    childViewContainer: '#user_list',
    template: '#users_view'
});
