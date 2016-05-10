var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        name: '名無し',
        team: '無所属',
        age: 0,
        number: 999,
        position: '全部',
        career: 'なし',
        title: 'なし'
    }
});
