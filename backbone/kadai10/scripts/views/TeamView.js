var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    tagName: 'a',
    className: 'list-group-item',
    attributes: {
        href: '#'
    },
    template: '#team_view',
    events: {
        'click': 'showDetail'
    },
    showDetail: function(e) {
        e.preventDefault();
        this.triggerMethod('show:detail');
    }
});
