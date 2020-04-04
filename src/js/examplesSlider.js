import Swiper from 'swiper';
const examplesSlider = () => {
  const buttons = document.querySelectorAll(`.examples__list-item`);
  const slider = new Swiper ('.examples__slider-container', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: `slide`,
    centeredSlides: true,
    pagination: {
      el: '.examples-pagination',
      clickable: true,
      },
    }
  );
  slider.on('slideChange', () => {
    let currentSlide = slider.activeIndex;
    buttons.forEach((it) => {
      it.classList.remove(`examples__list-item--active`);
    });
    buttons[currentSlide].classList.add(`examples__list-item--active`);
  });
  
  buttons.forEach((button, i) => {
    button.addEventListener( `click`, (evt) => {
      buttons.forEach((it) => {
        it.classList.remove(`examples__list-item--active`);
      });
      const {target} = evt;
      target.classList.add(`examples__list-item--active`);
      slider.slideTo(i, 600)
    });
  });
}  



export default () => {
  examplesSlider();
};