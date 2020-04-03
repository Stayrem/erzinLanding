
import Swiper from 'swiper';
import debounce from 'lodash/debounce.js';
import {mediaWidth} from './constants.js';
const dealSlider = () => {
  let sliderMode = -1;
  let slider;
  const onResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= mediaWidth.MOBILE) {
      console.log(`mobile`);
      slider !== undefined ? slider.destroy() : '';
      sliderMode = 1;
      slider = new Swiper (`.swiper-container`, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: `.deal-pagination`,
          clickable: true,
        },
      });
    } else if(windowWidth >= mediaWidth.MOBILE) {
      slider !== undefined ? console.log(`desktop`) : '';
      sliderMode = 0;
      slider = new Swiper (`.swiper-container`, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        effect: `fade`,
        centeredSlides: true
      });
    }

    const buttons = document.querySelectorAll(`.js-deal-change-slide`);
    buttons.forEach((button, i) => {
      button.addEventListener( `click`, (evt) => {
        buttons.forEach((it) => {
          it.classList.remove(`deal__pagination-btn--active`);
        });
        const {target} = evt;
        target.classList.add(`deal__pagination-btn--active`)
        slider.slideTo(i, 600)
      });
    });
  }
  onResize();
  window.addEventListener(`resize`, debounce(onResize, 300));
}  



export default () => {
  dealSlider();
};