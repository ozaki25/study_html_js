# 課題５
## やること
* 課題４までで作ったものにbackbone.marionetteを適用する

## 覚えてほしいこと
* marionetteの使い方

## marionetteのviewを使う

#### backboneのviewを継承している部分をmarionetteのviewに変更する

* UserView.js,UsersView.js,FormView.jsに対して以下の修正を加える
  1. marionetteをrequireを追加する
  <pre>var Marionette = require('backbone.marionette');</pre>
  1. backboneのrequireを削除する
  1. 継承するviewを変更する
    * marionetteのviewにはいくつか種類があるが、ここではItemViewを使っておく
  <pre>module.exports = Backbone.View.extend({</pre>
    ↓
  <pre>module.exports = Marionette.ItemView.extend({</pre>

#### templateの指定のしかたを変える

* marionetteを継承しているとtemplateの指定のしかたが簡単になります
* 各viewについて以下のように書き換えて下さい
<pre>template: _.template($('#users_view').html()),</pre>
↓
<pre>template: '#users_view',</pre>

#### renderを修正する

* 以下のような典型的なrenderはmarionetteですでに実装されています
<pre>
    `render: function() {`
        `var template = this.template(this.model.toJSON());`
        `this.$el.html(template);`
        `return this;`
    },
</pre>
* 典型的なパターンと外れる処理をしたい場合以外はrenderを書かなくてもよくなります
* UserView.jsとFormView.jsについては典型的な書き方だけなのでrenderを削除して下さい
* UsersView.jsについては以下のように修正して下さい
<pre>
    render: function() {
        this.$el.html(this.template());

        var formView = new FormView({collection: this.collection});
        formView.render();

        _(this.collection.models).each(function(user) {
            var userView = new UserView({model: user});
            $('#user_list').append(userView.render().el);
        }, this);

        return this;
    }
</pre>
↓
<pre>
    onRender: function() {
        var formView = new FormView({collection: this.collection});
        formView.render();

        _(this.collection.models).each(function(user) {
            var userView = new UserView({model: user});
            $('#user_list').append(userView.render().el);
        }, this);
    }
</pre>
* 変更した部分を確認します
  * render -> onRender
    * onRenderメソッドはrenderメソッドが呼ばれた直後に呼ばれます
    * renderメソッドはmarionette側で定義されているので、そちらのrenderが終わった直後にこのメソッドが呼ばれることになります
  * this.$el.html(this.template()); を削除
    * この処理はmarionetteで定義されているrenderメソッドで実行されるので削除します
  * return this; を削除
    * renderメソッドの決まり文句なので削除します

* この状態でgulpを実行して動作を確認して見て下さい
* 修正前と同様の動きをするはずです

#### セレクタの書き方を変更

* jqueryのセレクタを使っている部分をまとめて定義します
* UsersView.jsのtemplateの下に以下の定義を追加して下さい
<pre>
    ui: {
        userList: '#user_list'
    },
</pre>
* onRenderメソッドの中野$('#user_list').append・・・の部分を修正して下さい
<pre>this.ui.userList.append(userView.render().el);</pre>
* 使用するセレクタをuiというプロパティでまとめて宣言しておきます
  * :の左側が変数名、右側がセレクタ
* 使用する時はthis.ui.◯◯という形で使います
* FormView.jsも同様に修正します
* templateの下に以下の内容を追加します
<pre>
    ui: {
        inputName: 'input#name',
        inputTeam: 'input#team',
        inputPosision: 'input#position'
    },
</pre>
* addUserメソッドを修正します
<pre>
    var name = this.ui.inputName.val().trim();
    var team = this.ui.inputTeam.val().trim();
    var position = this.ui.inputPosition.val().trim();
</pre>

#### eventの設定のしかたを変更

* 今はUsersViewでcollectionに変更があった場合のイベントをlistenToを使って検知していました
* marionetteを使う場合はcollectionのイベントならcollectionEvents、modelのイベントならmodelEventsを使って定義します
* UsersViewに以下の修正を加えて下さい
<pre>
    initialize: function () {
        this.listenTo(this.collection, 'update', this.render);
    },
</pre>
↓
<pre>
    collectionEvents: {
        'update': 'render'
    },
</pre>

#### 不要なコードの削除

* marionetteを使った結果jqueryを直接使う場所がなくなりました
* underscoreもほとんど使用しなくなりました
* 不要なrequireは削除しておいて下さい

#### 動作確認

* これで一通りmarionetteに置き換えることができました
* gulpを実行し動作を確認して下さい
* marionetteの機能でまだ使っていないものもありますがmarionetteによってコードがだいぶすっきりしました
* kadai4終了時点とのコード量の差を確認して見て下さい

#### 開発内容の確認
* 課題５が完了した状態のサンプルがあるので自分で書いたコードと見比べて見てください
* [kadai5](./kadai5)
