$(function() {
    $('#q1').click(function() {
        // 要素を指定
        $('table').css('background-color', 'lightblue');
    });

    $('#q2').click(function() {
        // idを指定
        $('#my_best_game').css('color', 'gold');
    });

    $('#q3').click(function() {
        // classを指定
        $('.win').css('color', 'red');
    });

    $('#q4').click(function() {
        // id,class以外を指定
        $('[stadium="jingu"]').css('color', 'blue');
    });

    $('#q5').click(function() {
        // 複数条件を指定
        $('.win.in-hokkaido').css('color', 'purple');
    });

    $('#q6').click(function() {
        // 親子関係を指定
        $('tbody a').css('color', 'green');
    });

    $('#q7').click(function() {
        // 親子関係を指定(直下)
        $('li > a').css('color', 'yellow');
    });
});
