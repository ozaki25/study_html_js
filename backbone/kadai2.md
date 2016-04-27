# 課題２
## やること
* backboneのmodelとcollectionを作成し、modelに登録されているユーザを画面に表示する

## 覚えてほしいこと
* backboneのmodelとcollectionの作り方
* modelとcollectionに紐付いたviewの使い方

## modelに登録されたユーザ一覧を表示する

#### modelの作成
  * modelはデータベースにUserテーブルがあるとしてUserテーブルの1行1行を操作するようなイメージです
  * scripts/models/にUser.jsを作成して下さい
  * まずはbackboneを使えるようにするために以下の内容を記述して下さい 
  <pre>`var Backbone = require('backbone');`</pre>
  * 次にbackboneのmodelを継承するので以下の記述をします
  * module.exportsは前回同様このファイルを別のファイルから呼び出せる(requireできる)ようにするために記述です
  <pre>
    `module.exports = Backbone.Model.extend({`
      // modelの処理を書く
    `});`
  </pre>
  * 現段階ではmodelの定義だけできてればよいので中身は空っぽのままでOKです

#### collectionの作成
  * collectionは複数のモデルをまとめて管理するものです
  * modelをリストで所持しています
  * scripts/collections/にUsers.jsを作成して下さい
  * modelの時と同様にbackboneを使えるようにするために以下を記述します
  <pre>`var Backbone = require('backbone');`</pre>
  * Userモデルを使用するのでこちらもrequireします
  <pre>`var User = require('../models/User');`</pre>
  * backboneのcollectionを継承するので以下の記述をします
  <pre>
    `module.exports = Backbone.Collection.extend({`
      // collectionの処理を書く
    `});`
  </pre>
  * 次にこのcollectionがどのmodelを束ねているのか設定します
  <pre>`model: User`</pre>
  * これでcollectionの準備はOKです

#### Viewの構造をmodelとcollectionに対応づけ
* 課題１ではUsersViewのみを作りましたが課題２ではviewをmodelとcollectionに対応づけて考えます
  * model -> UserView.js
  * collection -> UsersView.js
* 課題１の段階では以下の内容をUsersViewで表示していました
<pre>
  `<div class="panel panel-info">`
    `<div class="panel-heading">ユーザ一覧</div>`
      `<ul id="user_list" class="list-group">`
        `<li class="list-group-item">テスト１</li>`
        `<li class="list-group-item">テスト２</li>`
        `<li class="list-group-item">テスト３</li>`
      `</ul>`
    `</div>`
  `</div>`
</pre>
* この内容をUserViewとUsersViewで分担します
  * UserViewは個々のmodelを表現するので以下の部分を担当することになります
  <pre>`<li class="list-group-item">テスト１</li>`</pre>
  * UsersViewは複数のmodelを束ねている部分を表現しているので以下の部分を担当することになります
  <pre>
    `<div class="panel panel-info">`
      `<div class="panel-heading">ユーザ一覧</div>`
        `<ul id="user_list" class="list-group">`
        `</ul>`
      `</div>`
    `</div>`
  </pre>

#### UserViewを作る
* まずはUserViewから対応していきましょう
* scripts/views/にUserView.jsを作成して下さい
* いつも通りのライブラリの読み込みを記述します
<pre>
  `var $ = require('jquery');`
  `var _ = require('underscore');`
  `var Backbone = require('backbone');`
</pre>
* backboneのviewを継承したviewを定義します
<pre>
  `module.exports = Backbone.View.extend({`
    `// ここにviewの処理を書いていく`
  `});`
</pre>
* tagNameのはなし
<pre>`tagName: 'li',`</pre>
* classNameのはなし
<pre>`className: 'list-group-item',`</pre>
* templateは課題１のときと同様に定義します
<pre>`template: _.template($('#user_view').html()),`</pre>
* renderのはなし
<pre>
  `render: function() {`
    `var template = this.template(this.model.toJSON());`
    `this.$el.html(template);`
    `return this;`
  `}`
</pre>
