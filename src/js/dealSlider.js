
import Swiper from 'swiper';
const dealSlider = () => {
  const buttons = document.querySelectorAll(`.js-deal-change-slide`);
  if (buttons.length > 0) {
    const slider = new Swiper ('.deal__container', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      effect: `slide`,
      centeredSlides: true,
      pagination: {
        el: '.deal-pagination',
        clickable: true,
        },
      }
    );
    slider.on('slideChange', () => {
      let currentSlide = slider.activeIndex;
      buttons.forEach((it) => {
        it.classList.remove(`deal__pagination-btn--active`);
      });
      buttons[currentSlide].classList.add(`deal__pagination-btn--active`);
    });
    
    buttons.forEach((button, i) => {
      button.addEventListener( `click`, (evt) => {
        buttons.forEach((it) => {
          it.classList.remove(`deal__pagination-btn--active`);
        });
        const {target} = evt;
        target.classList.add(`deal__pagination-btn--active`);
        slider.slideTo(i, 600)
      });
    });
  }
}  



export default () => {
  dealSlider();
};
