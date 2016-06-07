$(function () {
    $('.button').click(function () {

        $('img').remove();
        $('#results').html('');

        var SEARCH = $('.search').val();
        var APIKEY = '2642645-cf42d869fc25a73a97a804db7';
        var URL = 'https://pixabay.com/api/?key=' + APIKEY + '&q=' + SEARCH;

        $.getJSON(URL, function (data) {
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function (i, hit) {
                    if (i < 6) {
                        $("<img/>").attr("src", hit.webformatURL).appendTo("#results");
                    }
                });
            else
                $('#results').html('Ничего не найдено');
        });
    });
    
    $('body').keypress(function (e) {
        if (e.which == 13) {
            $('.button').click();
        }
    });
});
