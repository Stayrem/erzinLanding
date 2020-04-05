import "bootstrap-4-grid/css/grid.min.css";
import "swiper/css/swiper.min.css"
import "normalize.css/normalize.css";
import "./css/index.scss";
import 'lazysizes/lazysizes.js';
import dealSlider from './js/dealSlider.js';
import tariffsSlider from './js/tariffsSlider.js';
import examplesSlider from './js/examplesSlider.js';
import testimonialsSlider from './js/testimonialsSlider.js';

document.addEventListener(`DOMContentLoaded`, () => {
    lazySizes.init();
    dealSlider();
    tariffsSlider();
    examplesSlider();
    testimonialsSlider();
});