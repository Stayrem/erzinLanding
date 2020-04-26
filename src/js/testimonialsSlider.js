import Swiper from 'swiper';
import {mediaWidth} from './constants.js';
import debouce from 'lodash/debounce.js';

const testimonialsSlider = () => {
  const sliderContainer = document.querySelector(`.testimonials__slider-container`);
  if (sliderContainer !== null) {
    let screenWidth = window.innerWidth;
    const initSlider = (arg = false) => {
      const slider = new Swiper ('.testimonials__slider-container', {     
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        effect: `slide`,
        pagination: {
          el: '.testimonials-pagination ',
          clickable: true,
          },
        },
      );
  
      arg ? slider.destroy() : slider.slideTo(1, 600);
    }
    const onResize = () => {
      screenWidth = window.innerWidth;
      if ( screenWidth <= 1400) {
        initSlider();
      } else {
        initSlider(true);
      }
    }
  
    if ( screenWidth <= 1400 ) {
      initSlider();
    }
    window.addEventListener(`resize`, debouce(onResize, 300));
  }
}
export default testimonialsSlider;