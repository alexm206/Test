$(function(){
    $('.tabs__link').on('click', function(e) {
    var currentTab = $(this).attr('href');
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
    $('.tabs__content ' + currentTab).show().siblings().hide();
    $('.tabs__content ' + currentTab).addClass('active-tab').siblings().removeClass('active-tab');
});

    $('input').mouseover(function(e) {
        $(this).text(e.clientX + ' ' + e.clientY);
        $(this).next().fadeIn(600).show();
        if($(this).val() !== '') {
            $(this).next().fadeIn(600).hide();
        }
    });

    $('input').mouseout(function() {
        $(this).next().hide();
    });

    $('input').on('input', function() {
        if($(this).val() === '') {
            $(this).next().show();
        }else{
            $(this).next().hide();
        }
    });

    $('.help-button').on('click', function() {
        $('input').next().show();
        window.setTimeout(function() {
            $('input').next().hide();
        }, 2000);
    });
});
