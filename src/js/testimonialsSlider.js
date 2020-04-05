import Swiper from 'swiper';
import {mediaWidth} from './constants.js';
import debouce from 'lodash/debounce.js';

const testimonialsSlider = () => {
  const slider = new Swiper ('.testimonials__slider-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerView: 'auto',
      centeredSlides: true,
      effect: `slide`,
      pagination: {
      el: '.testimonials-pagination ',
      clickable: true,
      },
      },
  );
}
export default testimonialsSlider;