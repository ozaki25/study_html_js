$(function() {
    $('#q1-1').click(function() {
        $('#q1').attr('name', 'question_1');
    });

    $('#q1-2').click(function() {
        var name = $('#q1').attr('name');
        alert(name);
    });

    $('#q1-3').click(function() {
        $('#q1').removeAttr('name');
    });

    $('#q2-1').click(function() {
        $('#q2').addClass('red');
    });

    $('#q2-2').click(function() {
        $('#q2').removeClass('red');
    });

    $('#q2-3').click(function() {
        $('#q2').toggleClass('red');
    });

    $('#q3-1').click(function() {
        $('#fighters').append('<li>ベンチ</li>');
    });

    $('#q3-2').click(function() {
        $('#fighters').prepend('<li>監督</li>');
    });

    $('#q3-3').click(function() {
        $('#pitcher').after('<li>捕手</li>');
    });

    $('#q3-4').click(function() {
        $('#outfield').before('<li>内野手</li>')
    });

    $('#q4-1').click(function() {
        var text = $('#join_runners').text();
        alert(text);
    });

    $('#q4-2').click(function() {
        var html = $('#join_runners').html();
        alert(html);
    });

    $('#q4-3').click(function() {
        $('#resolution').text('Runnersに入ります！！');
    });

    $('#q4-4').click(function() {
        $('#resolution').html('<h1>Runnersに入ります！！</h1>');
    });

    $('#q5-1').click(function() {
        $('#starter').empty();
    });

    $('#q5-2').click(function() {
        $('#relief').remove();
    });

    $('#q6-1').click(function() {
        $('#favorite_team').val('日本ハムファイターズ');
    });

    $('#q6-2').click(function() {
        var team = $('#favorite_team').val();
        alert(team);
    });

    $('#q7-1').click(function() {
        $('#q7').hide();
    });

    $('#q7-2').click(function() {
        $('#q7').show();
    });

    $('#q7-3').click(function() {
        $('#q7').toggle();
    });
});
