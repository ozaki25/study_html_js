# 課題２
## やること
* backboneのmodelとcollectionを作成し、modelに登録されているユーザを画面に表示する

## 覚えてほしいこと
* backboneのmodelとcollectionの作り方
* modelとcollectionに紐付いたviewの使い方

## modelに登録されたユーザ一覧を表示する

#### modelを作成する
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
  * modelと同様にbackboneを使えるようにするために以下を記述します
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
