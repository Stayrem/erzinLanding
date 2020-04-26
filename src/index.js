import "bootstrap-4-grid/css/grid.min.css";
import "swiper/css/swiper.min.css"
import "normalize.css/normalize.css"
import 'lightgallery.js/dist/css/lightgallery.css';
import "./css/index.scss";
import 'lazysizes/lazysizes.js';
import 'zenscroll/zenscroll-min.js';
import dealSlider from './js/dealSlider.js';
import tariffsSlider from './js/tariffsSlider.js';
import examplesSlider from './js/examplesSlider.js';
import testimonialsSlider from './js/testimonialsSlider.js';
import initMap from './js/initMap.js';
import initModal from './js/initModal.js';
import initMask from './js/initFormMask.js';
import formSender from './js/formController.js';
import initExampleTabs from './js/example-tabs.js';
import initLightBox from './js/initLightBox.js';

document.addEventListener(`DOMContentLoaded`, () => {
    lazySizes.init();
    dealSlider();
    tariffsSlider();
    examplesSlider();
    testimonialsSlider();
    initMap();
    initModal();
    initMask();
    formSender();
    initExampleTabs();
    initLightBox();
});