
import Swiper from 'swiper';
const dealSlider = () => {
  const slider = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    effect: `fade`,
    centeredSlides: true
  });
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



export default () => {
  dealSlider();
};