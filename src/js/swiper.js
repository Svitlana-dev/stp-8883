import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

new Swiper('.swiper-container', {
  modules: [Navigation, Pagination, Keyboard],
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      spaceBetween: -320,
    },
  },
  on: {
    progress(swiper) {
      const slideWidth = 650;
      const overlapFactor = 0.6;

      swiper.slides.forEach(slide => {
        const progress = slide.progress;
        const translate = progress * slideWidth * overlapFactor;
        const scale = 1 - Math.abs(progress) * 0.15;

        slide.style.transform = `translateX(${translate}px) scale(${scale})`;
        slide.style.zIndex = 100 - Math.abs(progress * 10);
        slide.style.opacity = Math.abs(progress) > 3 ? 0 : 1;
      });
    },

    setTransition(swiper, duration) {
      swiper.slides.forEach(slide => {
        slide.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
      });
    },
  },
});
