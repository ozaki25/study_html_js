var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        name: '名無し',
        team: '無所属',
        position: '全部'
    }
});
