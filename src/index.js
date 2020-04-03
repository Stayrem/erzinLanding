import "bootstrap-4-grid/css/grid.min.css";
import "swiper/css/swiper.min.css"
import "normalize.css/normalize.css";
import "./css/index.scss";
import dealSlider from './js/dealSlider.js';
import tariffsSlider from './js/tariffsSlider.js';

document.addEventListener(`DOMContentLoaded`, () => {
    dealSlider();
    tariffsSlider();
});