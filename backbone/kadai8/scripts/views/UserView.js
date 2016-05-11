var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: '#user_view',
    events: {
        'click .delete': 'deleteUser'
    },
    deleteUser: function(e) {
        e.preventDefault();
        this.model.destroy();
    }
});
