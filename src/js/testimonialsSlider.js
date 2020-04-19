import Swiper from 'swiper';
import {mediaWidth} from './constants.js';
import debouce from 'lodash/debounce.js';

const testimonialsSlider = () => {
  const slider = new Swiper ('.testimonials__slider-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
      pagination: {
      el: '.testimonials-pagination ',
      clickable: true,
        },
      },
  );
}
export default testimonialsSlider;