$(function() {
    $('#q1').click(function() {
        $('table').attr('border', 1);
    });

    $('#q2').click(function() {
        $('#my_best_game').append('元ハムの今浪も３安打！');
    });

    $('#q3').click(function() {
        $('.win').css('color', 'red');
    });

    $('#q4').click(function() {
        $('[stadium="jingu"]').css('font-weight', 'bold');
    });

    $('#q5').click(function() {
        $('.win.in-hokkaido').css('font-size', '120%');
    });

    $('#q6').click(function() {
        $('tbody a').css('color', 'gold');
    });

    $('#q7').click(function() {
        $('li a').css('font-weight', 'bold');
    });
});
