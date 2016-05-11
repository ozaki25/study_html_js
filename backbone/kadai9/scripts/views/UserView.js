var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    tagName: 'a',
    className: 'list-group-item',
    attributes: {
        href: '#'
    },
    template: '#user_view',
    events: {
        'click .delete': 'deleteUser',
        'click': 'showDetail'
    },
    deleteUser: function(e) {
        e.preventDefault();
        this.model.destroy();
    },
    showDetail: function() {
        this.triggerMethod('show:detail');
    }
});
