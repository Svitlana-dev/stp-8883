import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectCoverflow,
} from 'swiper/modules';

new Swiper('.swiper-container', {
  modules: [Navigation, Pagination, Keyboard, EffectCoverflow],
  grabCursor: true,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: window.innerWidth >= 1200 ? -320 : 16,
  effect: window.innerWidth >= 1200 ? 'coverflow' : 'slides',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 850,
    modifier: 1,
    slideShadows: false,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
