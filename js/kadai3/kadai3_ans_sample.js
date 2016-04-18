$(function() {
    // ぶたをクリックすると背景がピンクになる
    $('#change_bgcolor_btn').click(function() {
        // attrを使うことで属性を操作することができる。
        $('body').addClass('bg-pink').removeClass('bg-blue');
    });

    $('#post_btn').click(function() {
        var input = $('#input_field').val().trim(); // trim()は先頭末尾の空文字を取り除く
        if(!input) {
        // 何も入力せずに投稿ボタンを押したらアラートをだす。
            alert("何か入力して下さい");
        } else {
            // 自分の投稿内容を画面に反映させる。
            appendMyStatement(input);
            // 入力域を空白にしてる。
            $('#input_field').val('');

            // 内容が「こんにちは」だったら１秒後に「こんにちは」と返事をする。
            if(input === 'こんにちは') {
                var response = 'こんにちは';
                appendOtherUserStatement(response);
            }

            // 内容に「エース」という単語が含まれていたら「ハムのエースは大谷翔平です！」と返事する。
            if(input.includes('エース')) {
                var response = "ハムのエースは大谷翔平です！";
                appendOtherUserStatement(response);
            }
        }
    });

    // バツボタンをクリックするとその投稿が削除される。
    // $('.close').click・・・だと動的に追加した要素を操作することができないからonを使う。
    $('#statement').on('click', '.close', function() {
        // クリックした要素の親要素(<div class="my-statement">)を削除している。
        $(this).parent().remove();
    });

    // アイコンにカーソルをのせるとアイコンがでかくなる。
    $('#statement').on('mouseover', '.user-icon', function() {
        // addClass,removeClassでclassをつけたり外したりできる。
        $(this).removeClass('user-icon');
        $(this).addClass('user-icon-big');
    });

    // アイコンからカーソルを外すとアイコンもとの大きさに戻る。
    $('#statement').on('mouseout', '.user-icon-big', function() {
        $(this).removeClass('user-icon-big');
        $(this).addClass('user-icon');
    });

    // 複雑な処理は関数として切り出した方が見通しがよいしDRY。
    function appendMyStatement(state) {
        $('#statement').append(
            '<div class="my-statement">' +
                state +
                '<button class="close" type="button">' +
                    '<span>×</span>' +
                '</button>' +
            '</div>'
        );
    }

    function appendOtherUserStatement(state) {
        setTimeout(function() {
            $('#statement').append(
                '<div class="other-user">' +
                    '<img src="./icon.jpg" alt="icon" class="img-circle user-icon">' +
                    '<div class="other-user-statement">' + state + '</div>' +
                '</div>'
            );
        }, 1000);
    }
});
