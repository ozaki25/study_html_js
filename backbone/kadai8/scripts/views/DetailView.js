var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    template: '#detail_view',
    modelEvents: {
        'remove': 'removed'
    },
    removed: function() {
        this.triggerMethod('refresh:detail');
    }
});
