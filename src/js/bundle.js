/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu() {
  const hamburger = document.querySelector('.hamburger');
  const menuBlock = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  const menuOverlay = document.querySelector('.menu__overlay');
  const arrow = document.querySelector('.arrow');
  const ancors = [ // якори секций для перехода по ссылкам из меню
    document.querySelector('#about-me'),
    document.querySelector('#resume'),
    document.querySelector('#tools'),
    document.querySelector('#portfolio'),
    document.querySelector('#contacts')
  ];

  hamburger.addEventListener('click', function() { // открывает меню при нажатии на гамбургер
    menuBlock.classList.add('active');
  });

  menuOverlay.addEventListener('click', () => { // закрывает меню при нажатии на оверлей
    menuBlock.classList.remove('active');
  });

  menuBlock.addEventListener('click', (e) => {
    if (e.target.closest('.menu__close') && menuBlock.contains(e.target.closest('.menu__close'))) { // закрывает меню при нажатии на крестик
      menuBlock.classList.remove('active');
    }

    if (e.target.closest('.menu__link') && menuBlock.contains(e.target.closest('.menu__link'))) { // клик на ссылки из меню
      menuBlock.classList.remove('active'); // закрывает меню
      menuLink.forEach((item, i) => { // определяет номер ссылки
        if (e.target === item) {
          ancors[i].scrollIntoView(); // перелистывает до якоря с таким же номером
        }
      });
    }
  });

  arrow.addEventListener('click', () => { // перелистывает на след. секцию при клике на стрелку
    ancors[0].scrollIntoView();
  });









}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/modules/policy.js":
/*!**********************************!*\
  !*** ./src/js/modules/policy.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function policy() {
  const policyLink = document.querySelector('#policyLink');
  const policyBlock = document.querySelector('.policy');
  const policyClose = document.querySelector('.policy__close');

  policyLink.addEventListener('click', function() {
    policyBlock.classList.add('active');
  });

  policyClose.addEventListener('click', function() {
    policyBlock.classList.remove('active');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (policy);

/***/ }),

/***/ "./src/js/modules/progress.js":
/*!************************************!*\
  !*** ./src/js/modules/progress.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function progress() {
  const counters = document.querySelectorAll('.progress__counter');
  const lines = document.querySelectorAll('.progress__bar_fill');

  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (progress);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/progress */ "./src/js/modules/progress.js");
/* harmony import */ var _modules_policy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/policy */ "./src/js/modules/policy.js");




window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_progress__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_policy__WEBPACK_IMPORTED_MODULE_2__["default"])();

});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map