
$(function () {
  $('.header-slider').slick({
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });




  // $('.tabs').on('click', function (e) {
  //   e.preventDefault();

  //   $($(this).sublings()).removeClass('tabs--active');
  //   $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

  //   $(this).addClass('tabs--active');
  //   $($(this).attr('href')).addClass('tabs__content--active');
  // });



  $('.tabs').on('click', function (e) {
    e.preventDefault();

    $('.tabs').removeClass('tabs--active');
    $('.producrt-tabs__content-item').removeClass('tabs__content--active');

    $(this).addClass('tabs--active');
    $($(this).attr('href')).addClass('tabs__content--active');
  });



});





  // $(".rate-yo").rateYo({
  //   ratedFill: "green",
  //   normalFill: "#A0A0A0",
  //   spacing: "7px",
  //   numStars: 5,
  //   starWidth: "35px",
  //   fullStar: true,
  // });


  // $('.menu__btn').on('click', function () {
  //   $('.menu-mobile').toggleClass('menu-mobile--active')
  // });







//  БУРГЕР
// $('.menu__btn').on('click', function () {
//   $('.menu__list').toggleClass('menu__list--active')
// });