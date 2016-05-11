# 課題９
## やること
* 

## 覚えてほしいこと
* 

## レイアウトを変更する
* ユーザの名前だけを出す一覧を作って、名前をクリックするとその人の詳細が真ん中に表示されるようにする
* 完成形のイメージはこんな
![img8.png](./images/img8.png)

## modelのカラムを増やす
* ユーザの詳細画面を作成することになるのでカラムをもう少し増やしてみます
  * 年齢(age)、背番号(number)、経歴(career)、タイトル(title)を追加します

#### index.htmlの修正
* id="form_view"の部分に以下の形式のものを追加します
  * labelの中には日本語で、inputのidには英語のものを入れて下さい
  <pre>
    `<div class="form-group">`
      `<label class="control-label">xxxx</label>`
      `<input type="text" id="xxxx" class="form-control">`
    `</div>`
  </pre>
* 上記の形式で、年齢と背番号はポジションの上に、経歴とタイトルはポジションの下に追加して下さい
* 新規登録の表示領域が小さめになったので入力域の大きさを少し小さくします
  * 全てのinputのclassにinput-smを追加して下さい
<pre>
    `<script id="form_view" type="text/template">`
      `<div class="panel panel-success">`
        `<div class="panel-heading">新規登録</div>`
        `<div class="panel-body">`
          `<form>`
            `<div class="form-group">`
              `<label class="control-label">名前</label>`
              `<input type="text" id="name" class="form-control input-sm">`
            `</div>`
            `<div class="form-group">`
              `<label class="control-label">チーム</label>`
              `<input type="text" id="team" class="form-control input-sm">`
            `</div>`
            `<div class="form-group">`
              `<label class="control-label">年齢</label>`
              `<input type="text" id="age" class="form-control input-sm">`
            `</div>`
            `<div class="form-group">`
              `<label class="control-label">背番号</label>`
              `<input type="text" id="number" class="form-control input-sm">`
            `</div>`
            `<div class="form-group">`
              `<label class="control-label">ポジション</label>`
              `<input type="text" id="position" class="form-control input-sm">`
            `</div>`
            `<div class="form-group">`
              `<label class="control-label">経歴</label>`
              `<input type="text" id="career" class="form-control input-sm">`
            `</div>`
            `<div class="form-group">`
              `<label class="control-label">タイトル</label>`
              `<input type="text" id="title" class="form-control input-sm">`
            `</div>`
            `<button type="button" id="add_user" class="btn btn-success">追加</button>`
          `</form>`
        `</div>`
      `</div>`
    `</script>`
</pre>

#### FormViewの修正
* 新しく追加したカラムの内容が保存されるように修正します
* uiの追加
<pre>
  inputAge: 'input#age',
  inputNumber: 'input#number',
  inputCareer: 'input#career',
  inputTitle: 'input#title',
</pre>
* 値の取得とmodelへのsetを追加
<pre>
    var age = this.ui.inputAge.val().trim();
    var number = this.ui.inputNumber.val().trim();
    var career = this.ui.inputCareer.val().trim();
    var title = this.ui.inputTitle.val().trim();
    if(age) user.set('age', age);
    if(number) user.set('number', number);
    if(career) user.set('career', career);
    if(title) user.set('title', title);
</pre>

#### userモデルの修正
* user.jsにデフォルト値も追加しておきます
<pre>
    age: 0,
    number: 999,
    career: 'なし',
    title: 'なし'
</pre>

#### 動作確認
* データが登録されているか確認するためにindex.htmlにデバッグ用コードを追加します
* id="user_view"の中に以下の1行を入れて動かしてみる
<pre><%- age %> <%- number %> <%- career %> <%- title %></pre>
* gulpを実行して動きを確認して下さい
* 追加したカラムの内容が表示されればOKです
  * エラーが出る場合はブラウザのコンソールで以下の内容を実行しDBを空っぽにしてから試して下さい
  <pre>localStorage.clear()</pre>
* 上記のデバッグ用のコードは消しておいて下さい
