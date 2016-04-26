var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    tagName: 'li',
    className: 'list-group-item',
    template: _.template($('#user_view').html()),
    events: {
        'click .delete': 'deleteUser'
    },
    render: function() {
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    },
    deleteUser: function(e) {
        e.preventDefault();
        this.model.destroy();
    }
});
