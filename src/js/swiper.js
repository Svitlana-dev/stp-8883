import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

new Swiper('.swiper-container', {
  modules: [Navigation, Pagination],
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
