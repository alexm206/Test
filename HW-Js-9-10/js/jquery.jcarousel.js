$(function() {
  $('.jcarousel')
    .jcarousel({
          animation: {
            duration: 700,
            easing:   'swing',
            complete: function() {}
        },
        wrap: 'circular',
      })

    .jcarouselAutoscroll({
        interval: 3500,
        target: '+=1',
        autostart: true
    });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    .on('click', function(e) {
        e.preventDefault();
    })
    .jcarouselPagination({
        perPage: 1,
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    })
  ;

  $('.jcarousel-control-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-control-next').jcarouselControl({
    target: '+=1'
  });
});
