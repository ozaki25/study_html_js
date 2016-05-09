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

* templateの指定のしかたを変える


#### 開発内容の確認
* 課題５が完了した状態のサンプルがあるので自分で書いたコードと見比べて見てください
* [kadai5](./kadai5)
