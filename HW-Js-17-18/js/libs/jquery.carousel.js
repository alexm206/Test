(function($) {
    $.fn.carousel = function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = $('.carousel-hider').width() + parseInt($('.carousel-element').css('margin-right'));
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue < maximumOffset) {
          currentLeftValue += pixelsOffset;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= pixelsOffset;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });

    return this;
  }

}(jQuery));
