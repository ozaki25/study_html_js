var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    el: '#users',
    template: _.template($('#users_view').html()),
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});
