import Swiper from 'swiper';
import {mediaWidth} from './constants.js';
import debouce from 'lodash/debounce.js';

const tariffsSlider = () => {
  let screenWidth = window.innerWidth;
  const initSlider = (arg = false) => {
    const slider = new Swiper ('.tariffs-slider__container', {     
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      freeMode: true,
      effect: `slide`,
      pagination: {
        el: '.tariffs-slider .swiper-pagination ',
        clickable: true,
        },
      },
    );

    arg ? slider.destroy() : slider.slideTo(1, 600);
  }
  const onResize = () => {
    screenWidth = window.innerWidth;
    if ( screenWidth <= mediaWidth.DESKTOP) {
      initSlider();
    } else {
      initSlider(true);
    }
  }

  if ( screenWidth <= mediaWidth.DESKTOP ) {
    initSlider();
  }
  window.addEventListener(`resize`, debouce(onResize, 300));

}
export default tariffsSlider;