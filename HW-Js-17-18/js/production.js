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
;// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();
;$(function() {
  $('.carousel-hider').carousel();

  var page = $('#page').html();
  var info = [
    {
      name: "Маруневич Алексей Игоревич",
      status: "Уже не работаю в SEO компании Maketop",
      phone: "+380664274265",
      feedback: "Отличные курсы. Очень хочу во всем разобраться и доучиться до конца. Чем дальше - тем больше затягивает",
      photoPath: "img/whysoserious.jpg",
      reason: "Это для меня интересно",
      vk: "https://vk.com/alexmarunevich"
    },
    {
      reason: "Хочу освоить новую профессию"
    },
    {
      reason: "Хочу зарабатывать больше"
    },
    {
      reason: "Хочу получать удовольствие от работы"
    }
  ];
  var content = tmpl(page, {data:info});

  $('body').append(content);
});
