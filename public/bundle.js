/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/index.scss":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/index.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: \\\"Open Sans\\\";\\n  src: url(\\\"/assets/fonts/OpenSans-Bold.ttf\\\");\\n  font-weight: 700;\\n  font-style: bold; }\\n\\n@font-face {\\n  font-family: \\\"Open Sans\\\";\\n  src: url(\\\"/assets/fonts/OpenSans-Italic.ttf\\\");\\n  font-weight: 400;\\n  font-style: italic; }\\n\\n@font-face {\\n  font-family: \\\"Open Sans\\\";\\n  src: url(\\\"/assets/fonts/OpenSans-Regular.ttf\\\");\\n  font-weight: 400;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: \\\"Open Sans\\\";\\n  src: url(\\\"/assets/fonts/OpenSans-SemiBold.ttf\\\");\\n  font-weight: 600;\\n  font-style: bold; }\\n\\n@font-face {\\n  font-family: \\\"Segoe UI\\\";\\n  src: url(\\\"/assets/fonts/SegoeUI.ttf\\\");\\n  font-weight: 400;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: \\\"Segoe UI\\\";\\n  src: url(\\\"/assets/fonts/SegoeUI-Italic.ttf\\\");\\n  font-weight: 400;\\n  font-style: normal; }\\n\\n@font-face {\\n  font-family: \\\"Segoe UI\\\";\\n  src: url(\\\"/assets/fonts/SegoeUI-Bold.ttf\\\");\\n  font-weight: 700;\\n  font-style: bold; }\\n\\n@font-face {\\n  font-family: \\\"TT Barrels\\\";\\n  src: url(\\\"/assets/fonts/TTBarrels-DemiBoldItalic.ttf\\\");\\n  font-weight: 600;\\n  font-style: italic; }\\n\\n@font-face {\\n  font-family: \\\"TT Barrels\\\";\\n  src: url(\\\"/assets/fonts/TTBarrels-DemiBold.ttf\\\");\\n  font-weight: 600;\\n  font-style: bold; }\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit !important; }\\n\\nhtml {\\n  box-sizing: border-box !important; }\\n\\nbody {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  box-sizing: border-box;\\n  overflow-x: hidden; }\\n\\n.title {\\n  font-family: \\\"TT Barrels\\\", sans-serif;\\n  font-weight: 600; }\\n\\n.title--middle {\\n  font-size: 30px; }\\n\\n.title--white {\\n  color: #ffffff; }\\n\\n.title--blue {\\n  color: #485cf1;\\n  font-style: italic; }\\n\\n.btn {\\n  padding: 0;\\n  border: none;\\n  color: inherit;\\n  background-color: transparent;\\n  cursor: pointer; }\\n\\n.blue-btn {\\n  position: relative;\\n  padding-top: 25px;\\n  padding-bottom: 25px;\\n  max-width: 299px;\\n  width: 100%;\\n  background: linear-gradient(180deg, #3268fb 0%, #1438c6 100%);\\n  border-radius: 8px;\\n  color: #ffffff;\\n  text-transform: uppercase; }\\n  .blue-btn::before {\\n    display: block;\\n    content: \\\"\\\";\\n    position: absolute;\\n    width: 95%;\\n    height: 100%;\\n    border-radius: 8px;\\n    background: linear-gradient(180deg, #3268fb 0%, #112c95 100%);\\n    top: 5px;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    z-index: -1;\\n    transition: top 0.4s; }\\n  .blue-btn:hover::before {\\n    top: 0; }\\n\\n.swiper-pagination-bullet {\\n  margin-right: 20px;\\n  width: 10px;\\n  height: 10px; }\\n  .swiper-pagination-bullet:last-child {\\n    margin-right: 0; }\\n\\n@media (max-width: 768px) {\\n  .mobile-hide {\\n    display: none !important; } }\\n\\n@media (min-width: 768px) {\\n  .desktop-hide {\\n    display: none !important; } }\\n\\n.header {\\n  margin-top: 36px;\\n  width: 100%; }\\n\\n.header__logo {\\n  margin-right: 0; }\\n\\n.header__inner {\\n  display: flex;\\n  align-items: flex-end; }\\n\\n.header__phone-link {\\n  margin-left: auto;\\n  text-align: right; }\\n\\n@media (max-width: 992px) {\\n  .header__logo {\\n    margin-right: 0; } }\\n\\n.welcome {\\n  background-image: url(\\\"/assets/img/BG.jpg\\\");\\n  background-size: cover;\\n  overflow: hidden; }\\n\\n.welcome__content {\\n  z-index: 1; }\\n\\n.welcome__title {\\n  margin-top: 85px;\\n  margin-bottom: 0;\\n  font-size: 58px;\\n  color: #ffffff; }\\n\\n.welcome__img {\\n  margin-top: 25px;\\n  width: 100%;\\n  align-self: flex-end; }\\n\\n.welcome__subtitle {\\n  color: #ffffff;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 24px;\\n  margin-top: 20px;\\n  margin-bottom: 0; }\\n\\n.welcome__btn {\\n  margin-bottom: 80px;\\n  margin-top: 60px; }\\n\\n.welcome__subtext {\\n  position: relative;\\n  opacity: 0.5;\\n  color: #ffffff;\\n  font-size: 12px;\\n  line-height: 18px;\\n  max-width: 120px;\\n  text-align: center;\\n  margin-left: 33px;\\n  margin-top: 0;\\n  margin-bottom: 50px; }\\n  .welcome__subtext::before {\\n    position: absolute;\\n    content: \\\"\\\";\\n    width: 53px;\\n    height: 52px;\\n    opacity: 0.5;\\n    background-image: url(\\\"/assets/img/welcome-arrow.png\\\");\\n    top: -50px;\\n    right: -50px; }\\n\\n.welcome__image-wrapper {\\n  position: relative;\\n  display: flex; }\\n\\n.welcome__tooltip {\\n  display: flex;\\n  flex-direction: column;\\n  position: absolute;\\n  left: -150px;\\n  bottom: 100px;\\n  padding: 20px;\\n  border-radius: 8px;\\n  border: 1px dashed rgba(255, 255, 255, 0.15); }\\n\\n.welcome__tooltip-title {\\n  color: #ffffff;\\n  font-size: 14px;\\n  margin-bottom: 5px;\\n  font-weight: 700;\\n  line-height: 24px; }\\n\\n.welcome__tooltip-subtitle {\\n  opacity: 0.72;\\n  color: #ffffff;\\n  font-size: 14px;\\n  line-height: 24px; }\\n\\n@media (max-width: 992px) {\\n  .welcome__title {\\n    font-size: 43px; }\\n  .welcome__subtext {\\n    margin-bottom: 50px; }\\n  .welcome__tooltip {\\n    bottom: 20px; } }\\n\\n@media (max-width: 768px) {\\n  .welcome__image-wrapper {\\n    padding-bottom: 57px; }\\n  .welcome__title {\\n    font-size: 30px; }\\n  .welcome__subtitle {\\n    font-size: 12px; }\\n  .welcome__btn {\\n    max-width: 100%; }\\n  .blue-btn {\\n    font-size: 13px;\\n    padding-top: 20px;\\n    padding-bottom: 20px; }\\n  .welcome__tooltip {\\n    margin-right: auto;\\n    margin-left: auto;\\n    position: relative;\\n    left: unset;\\n    bottom: unset;\\n    max-width: 290px;\\n    width: 100%;\\n    padding-top: 12px;\\n    padding-bottom: 12px;\\n    padding-right: 12px;\\n    background-color: #3a3941;\\n    border: none;\\n    outline: 1px dashed rgba(255, 255, 255, 0.15);\\n    outline-offset: -7px; }\\n  .welcome__tooltip-img {\\n    position: absolute;\\n    left: -38px;\\n    top: -56px; }\\n  .welcome__subtext {\\n    margin-left: auto;\\n    margin-right: auto; }\\n  .welcome__tooltip-title {\\n    font-size: 11px;\\n    max-width: 160px;\\n    width: 100%;\\n    margin-left: auto;\\n    text-align: left; }\\n  .welcome__tooltip-subtitle {\\n    font-size: 11px;\\n    max-width: 160px;\\n    width: 100%;\\n    margin-left: auto;\\n    text-align: left; } }\\n\\n.nav__list {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  display: flex; }\\n\\n.nav__list-item {\\n  margin-right: 50px; }\\n\\n.nav__list-link {\\n  color: #ffffff;\\n  text-decoration: none;\\n  opacity: 0.6;\\n  font-size: 14px;\\n  font-weight: 400;\\n  line-height: 24px;\\n  transition: opacity 0.3s; }\\n  .nav__list-link:hover {\\n    opacity: 1; }\\n\\n@media (max-width: 992px) {\\n  .nav__list-item {\\n    margin-right: 37px; } }\\n\\n.phone-link {\\n  color: #ffffff;\\n  text-decoration: none;\\n  font-size: 14px;\\n  font-weight: 400;\\n  line-height: 24px; }\\n\\n.section {\\n  padding-top: 80px;\\n  padding-bottom: 80px;\\n  background-color: #ffffff; }\\n\\n.section__title {\\n  font-size: 40px;\\n  margin-top: 0;\\n  margin-bottom: 75px; }\\n\\n.section__text {\\n  color: #656565;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 24px;\\n  max-width: 350px;\\n  margin-bottom: 25px; }\\n\\n.section__list {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none; }\\n\\n.section__list-item {\\n  margin-bottom: 15px;\\n  position: relative; }\\n\\n@media (max-width: 768px) {\\n  .section__title {\\n    margin-bottom: 50px;\\n    font-size: 24px; }\\n  .section__list {\\n    display: none; }\\n  .section__text {\\n    font-size: 12px;\\n    margin-bottom: 35px; } }\\n\\n.solutions__title {\\n  max-width: 400px; }\\n\\n@media (max-width: 768px) {\\n  .solutions__title {\\n    max-width: 410px;\\n    margin-bottom: 50px; } }\\n\\n.deal {\\n  padding: 10px;\\n  max-width: 445px;\\n  width: 100%;\\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.16);\\n  border-radius: 10px;\\n  background-color: #ffffff;\\n  margin-left: auto; }\\n\\n.deal__container {\\n  border-radius: 10px;\\n  margin-right: unset;\\n  padding: 5px;\\n  border: 2px dashed #e0e0e0; }\\n\\n.deal__item {\\n  box-sizing: border-box;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 35px 25px;\\n  background-color: #ffffff;\\n  border-radius: 8px;\\n  margin-right: 10px;\\n  height: unset; }\\n\\n.deal__btn {\\n  margin-top: auto;\\n  text-transform: unset; }\\n\\n.deal__title {\\n  text-align: center;\\n  color: #333333;\\n  font-size: 18px;\\n  font-weight: 700;\\n  line-height: 24px;\\n  margin-top: 0;\\n  margin-bottom: 15px; }\\n\\n.deal__text {\\n  text-align: center;\\n  color: #656565;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 24px;\\n  margin-top: 0;\\n  margin-bottom: 25px; }\\n\\n.deal__price-item {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 25px; }\\n\\n.deal__price-title {\\n  font-family: \\\"TT Barrels\\\", sans-serif;\\n  font-style: italic;\\n  color: #485cf1;\\n  font-size: 30px;\\n  font-weight: 600;\\n  margin-bottom: 2px; }\\n\\n.deal__price__subtitle {\\n  color: #656565;\\n  font-size: 16px;\\n  font-weight: 400;\\n  line-height: 24px; }\\n\\n.deal__pagination-btn {\\n  padding: 0;\\n  border: none;\\n  color: inherit;\\n  background-color: transparent;\\n  cursor: pointer;\\n  text-align: unset;\\n  position: relative;\\n  padding-left: 40px;\\n  outline: none;\\n  color: #767676; }\\n  .deal__pagination-btn::before {\\n    position: absolute;\\n    top: 5px;\\n    left: 0;\\n    content: \\\"\\\";\\n    min-width: 20px;\\n    height: 2px;\\n    background-color: #c6c6c6; }\\n\\n.deal__pagination-btn--active {\\n  color: #333333;\\n  pointer-events: none; }\\n  .deal__pagination-btn--active::before {\\n    background-color: #485cf1; }\\n\\n@media (max-width: 768px) {\\n  .deal {\\n    max-width: 350px;\\n    width: 100%;\\n    margin-right: auto; }\\n  .deal__title {\\n    font-size: 16px; }\\n  .deal__text {\\n    font-size: 12px; }\\n  .deal__price-title {\\n    font-size: 28px; }\\n  .deal__price__subtitle {\\n    font-size: 12px; }\\n  .deal-pagination {\\n    margin-top: 20px;\\n    left: 50%;\\n    transform: translateX(-50%); } }\\n\\n.tariffs {\\n  background-image: url(\\\"/public/assets/img/tarifs-bg.jpg\\\"); }\\n\\n.tariffs__title {\\n  text-align: center;\\n  line-height: 1.5; }\\n\\n.tariffs-slider {\\n  position: relative; }\\n\\n.tariffs-slider__item {\\n  background-color: #ffffff;\\n  border-radius: 10px;\\n  padding: 5px;\\n  width: 255px; }\\n\\n.tariffs-slider__inner {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n  border-radius: 10px;\\n  border: 1px dashed #e0e0e0;\\n  padding-top: 20px;\\n  padding-left: 15px;\\n  padding-right: 15px;\\n  padding-bottom: 20px; }\\n\\n.tariffs-slider__item-icon {\\n  align-self: center; }\\n\\n.tariffs-slider__item-title {\\n  margin-top: 15px;\\n  margin-bottom: 5px;\\n  text-align: center;\\n  font-size: 16px;\\n  font-weight: 700;\\n  line-height: 20px; }\\n\\n.tariffs-slider__item-text {\\n  text-align: center;\\n  font-size: 13px;\\n  font-weight: 400;\\n  line-height: 18px;\\n  margin-bottom: 15px; }\\n\\n.tariffs-slider__item-price {\\n  color: #485cf1;\\n  font-family: \\\"TT Barrels\\\", sans-serif;\\n  font-style: italic;\\n  font-size: 20px;\\n  font-weight: 600;\\n  text-align: center; }\\n\\n.tariffs-slider__item-subprice {\\n  text-align: center;\\n  color: #a3a3a3;\\n  font-family: \\\"TT Barrels\\\", sans-serif;\\n  font-style: italic;\\n  font-size: 14px;\\n  font-weight: 600; }\\n\\n.tariffs-slider__item-btn {\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  margin-top: 15px;\\n  border-radius: 4px;\\n  border: 1px solid #485cf1;\\n  transition: background-color 0.3s; }\\n  .tariffs-slider__item-btn:hover {\\n    background-color: #485cf1;\\n    color: #ffffff; }\\n\\n.tariffs-slider__wrapper {\\n  margin: 0 auto;\\n  max-width: 1200px;\\n  display: flex;\\n  justify-content: space-around; }\\n\\n.tariffs-slider__pagination {\\n  position: absolute;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  margin-top: 20px; }\\n  .tariffs-slider__pagination .swiper-pagination-bullet {\\n    background-color: #ffffff;\\n    opacity: 0.8; }\\n  .tariffs-slider__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {\\n    background-color: #485cf1;\\n    opacity: unset; }\\n\\n@media (max-width: 1200px) {\\n  .tariffs-slider__wrapper {\\n    justify-content: unset; } }\\n\\n@media (max-width: 768px) {\\n  .tariffs__title {\\n    text-align: left; }\\n  .tariffs-slider__item-text {\\n    font-size: 12px; }\\n  .tariffs-slider__item-btn {\\n    font-size: 13px; }\\n  .tariffs-slider__wrapper {\\n    justify-content: unset; }\\n  .tariffs-slider__container {\\n    padding: 0 20px; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./css/index.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/webpack/hot sync ^\\.\\/log$":
/*!***************************************************************!*\
  !*** ../node_modules/webpack/hot sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"../node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///../node_modules/webpack/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./css/index.scss":
/*!************************!*\
  !*** ./css/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./css/index.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_4_grid_css_grid_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-4-grid/css/grid.min.css */ \"../node_modules/bootstrap-4-grid/css/grid.min.css\");\n/* harmony import */ var bootstrap_4_grid_css_grid_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_4_grid_css_grid_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/swiper.min.css */ \"../node_modules/swiper/css/swiper.min.css\");\n/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize.css/normalize.css */ \"../node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/index.scss */ \"./css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_dealSlider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/dealSlider.js */ \"./js/dealSlider.js\");\n/* harmony import */ var _js_tariffsSlider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/tariffsSlider.js */ \"./js/tariffsSlider.js\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_js_dealSlider_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_js_tariffsSlider_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: mediaWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mediaWidth\", function() { return mediaWidth; });\nvar mediaWidth = {\n  LAPTOP: 992,\n  MOBILE: 768,\n  DESKTOP: 1200\n};\n\n//# sourceURL=webpack:///./js/constants.js?");

/***/ }),

/***/ "./js/dealSlider.js":
/*!**************************!*\
  !*** ./js/dealSlider.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/js/swiper.esm.bundle.js\");\n\n\nvar dealSlider = function dealSlider() {\n  var buttons = document.querySelectorAll(\".js-deal-change-slide\");\n  var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.deal__container', {\n    loop: false,\n    slidesPerView: 1,\n    spaceBetween: 20,\n    effect: \"slide\",\n    centeredSlides: true,\n    pagination: {\n      el: '.deal-pagination',\n      clickable: true\n    }\n  });\n  slider.on('slideChange', function () {\n    var currentSlide = slider.activeIndex;\n    buttons.forEach(function (it) {\n      it.classList.remove(\"deal__pagination-btn--active\");\n    });\n    buttons[currentSlide].classList.add(\"deal__pagination-btn--active\");\n  });\n  buttons.forEach(function (button, i) {\n    button.addEventListener(\"click\", function (evt) {\n      buttons.forEach(function (it) {\n        it.classList.remove(\"deal__pagination-btn--active\");\n      });\n      var target = evt.target;\n      target.classList.add(\"deal__pagination-btn--active\");\n      slider.slideTo(i, 600);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  dealSlider();\n});\n\n//# sourceURL=webpack:///./js/dealSlider.js?");

/***/ }),

/***/ "./js/tariffsSlider.js":
/*!*****************************!*\
  !*** ./js/tariffsSlider.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/js/swiper.esm.bundle.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./js/constants.js\");\n/* harmony import */ var lodash_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce.js */ \"../node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce_js__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar tariffsSlider = function tariffsSlider() {\n  var screenWidth = window.innerWidth;\n\n  var initSlider = function initSlider() {\n    var _;\n\n    var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.tariffs-slider__container', {\n      breakpoints: {\n        992: (_ = {\n          slidesPerView: 'auto',\n          centeredSlides: true,\n          spaceBetween: 30,\n          effect: \"slide\"\n        }, _defineProperty(_, \"centeredSlides\", true), _defineProperty(_, \"pagination\", {\n          el: '.tariffs-slider__pagination',\n          clickable: true\n        }), _),\n        800: {\n          slidesPerView: 3,\n          spaceBetween: 30,\n          pagination: {\n            el: '.tariffs-slider__pagination',\n            clickable: true\n          }\n        },\n        600: {\n          slidesPerView: 2,\n          spaceBetween: 30,\n          pagination: {\n            el: '.tariffs-slider__pagination',\n            clickable: true\n          }\n        },\n        320: {\n          slidesPerView: 1,\n          spaceBetween: 20,\n          pagination: {\n            el: '.tariffs-slider__pagination',\n            clickable: true\n          }\n        }\n      }\n    });\n    arg ? slider.destroy() : slider.slideTo(1, 600);\n  };\n\n  var onResize = function onResize() {\n    screenWidth = window.innerWidth;\n\n    if (screenWidth <= _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"mediaWidth\"].DESKTOP) {\n      console.log(screenWidth, '<', _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"mediaWidth\"].DESKTOP);\n      initSlider();\n    } else {\n      console.log(screenWidth, '>', _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"mediaWidth\"].DESKTOP);\n      initSlider(true);\n    }\n  };\n\n  console.log(screenWidth <= _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"mediaWidth\"].DESKTOP);\n\n  if (screenWidth <= _constants_js__WEBPACK_IMPORTED_MODULE_1__[\"mediaWidth\"].DESKTOP) {\n    initSlider();\n  }\n\n  window.addEventListener(\"resize\", lodash_debounce_js__WEBPACK_IMPORTED_MODULE_2___default()(onResize, 300));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tariffsSlider);\n\n//# sourceURL=webpack:///./js/tariffsSlider.js?");

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ../node_modules/webpack-dev-server/client?http://localhost:7700 ./index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\projects\\erzinLanding\\node_modules\\webpack-dev-server\\client\\index.js?http://localhost:7700 */\"../node_modules/webpack-dev-server/client/index.js?http://localhost:7700\");\nmodule.exports = __webpack_require__(/*! C:\\projects\\erzinLanding\\src\\index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_../node_modules/webpack-dev-server/client?");

/***/ })

/******/ });