
$(function () {
  $('.evevns__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 700,
  })

  // $('.tab').on('click', function (e) {
  //   e.preventDefault();

  //   $('.tab').removeClass('tab--active');
  //   $('.producrt-tabs__content-item').removeClass('tabs__content--active');

  //   $(this).addClass('tab--active');
  //   $($(this).attr('href')).addClass('tabs__content--active');
  // });


  // $(".rate-yo").rateYo({
  //   ratedFill: "green",
  //   normalFill: "#A0A0A0",
  //   spacing: "7px",
  //   numStars: 5,
  //   starWidth: "35px",
  //   fullStar: true,
  // });


  $('.menu__btn').on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile--active')
  });


});

// $('.tab').on('click', function (e) {
//   e.preventDefault();

//   $($(this).sublings()).removeClass('tab--active');
//   $($(this).parent().siblings().find('div')).removeClass('tabs-conrent--active');

//   $(this).addClass('tab--active');
//   $($(this).attr('href')).addClass('tabs__content--active');
// });

//  БУРГЕР
// $('.menu__btn').on('click', function () {
//   $('.menu__list').toggleClass('menu__list--active')
// });