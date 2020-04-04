import Swiper from 'swiper';
import {mediaWidth} from './constants.js';
import debouce from 'lodash/debounce.js';

const tariffsSlider = () => {
  let screenWidth = window.innerWidth;
  const initSlider = (arg = false) => {
    const slider = new Swiper ('.tariffs-slider__container', {
      breakpoints: {
        992: {          
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          effect: `slide`,
          pagination: {
            el: '.tariffs-slider__pagination',
            clickable: true,
            },
          },
        800: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.tariffs-slider__pagination',
            clickable: true,
            },
          },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: {
            el: '.tariffs-slider__pagination',
            clickable: true,
            },
          },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: {
            el: '.tariffs-slider__pagination',
            clickable: true,
            },
        }
        }
      }
    );
    window.slider = slider;
    arg ? slider.destroy(true, true) : slider.slideTo(1, 600);
  }
  const onResize = () => {
    screenWidth = window.innerWidth;
    if ( screenWidth <= mediaWidth.DESKTOP) {
      initSlider();
    } else {
      console.log(screenWidth, '>' , mediaWidth.DESKTOP)
      initSlider(true);
    }
  }
  console.log(screenWidth <= mediaWidth.DESKTOP)

  if ( screenWidth <= mediaWidth.DESKTOP ) {
    initSlider();
  }
  window.addEventListener(`resize`, debouce(onResize, 300));

}
export default tariffsSlider;