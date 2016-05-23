$(function() {
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
