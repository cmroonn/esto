'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Counter for doctors list
  var countOfList = document.querySelectorAll('.doctors__list__item');
  document.getElementById('allDoctors').innerText = countOfList.length;

  function updateCurrent() {
    setTimeout(function () {
      var index = document.querySelector('.doctors__list__item.swiper-slide-active').getAttribute('data-swiper-slide-index');
      index = parseInt(index);
      index += 1;
      document.getElementById('currentDoctor').innerText = index;
    }, 300);
  }

  ;
  document.querySelector('.doctors__navigation__down').addEventListener('click', updateCurrent);
  document.querySelector('.doctors__navigation__up').addEventListener('click', updateCurrent); // Doctors list swiper init

  var doctorsList = new Swiper('.doctors__list', {
    direction: 'vertical',
    height: 250,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    navigation: {
      prevEl: '.doctors__navigation__up',
      nextEl: '.doctors__navigation__down'
    }
  });
  var reviews = new Swiper('.reviews__content', {
    navigation: {
      prevEl: '.review__content__arrow__left',
      nextEl: '.review__content__arrow__right'
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 50
  });
  var reviewsPhotos = new Swiper('.reviews__photos', {});
});