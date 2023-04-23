/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function animation() {

  const targets = [ // контейнеры, за которыми нужно следить
    document.querySelector('.about-me__skills'), // контейнер с блоками в секции aboutme
    document.querySelector('.progress'), // контейнер с блоками с процентами
  ];

  const toolBlocks = document.querySelectorAll('.tool'); // блоки в секции tools
  toolBlocks.forEach((item, i) => {
    targets.push(item); // добавляет каждый элемент из nodelist в массив targets
    item.style.opacity = '0'; // сначала прозрачные
    item.style.transition = `all 0.6s linear ${i / 5}s`; // задержка анимации для каждого следующего элемента
  });

  const observer = new IntersectionObserver(callback, {
    rootMargin: '0px 0px -100px 0px', // поля как в CSS, меняют срабатывание события пересечения
  }); // создается объект observer. {} это разные опции

  targets.forEach((target) => {
    observer.observe(target); // метод observe запускает "слежку" за элементами в константе target
  });

  const skillBlocks = document.querySelectorAll('.skill'); // блоки в секции about-me, которые будут выезжать справа
  skillBlocks.forEach((item, i) => {
    item.style.transform = `translateX(100vw)`; // начальное смещение за границу блока
    item.style.transition = `all 0.6s linear ${i / 5}s`; // задержка анимации для каждого следующего элемента
  });

  function callback(entries) { // // делаем что-либо для каждого отслеживаемого контейнера
    entries.forEach((entry) => { // entry это объект события

      if (entry.isIntersecting && entry.target.matches('.about-me__skills')) { // действие, когда элемент входит в область наблюдения (по умолчанию это видимая часть страницы)
        skillBlocks.forEach((item) => { // cмещает блоки skills справа на свое место
          item.style.transform = `translateX(0)`;
        });
        observer.unobserve(entry.target); // удаляет обработчик событий
      }

      if (entry.isIntersecting && entry.target.matches('.progress')) { // действие, когда элемент входит в область наблюдения (по умолчанию это видимая часть страницы)
        percentsAnimation(); // заполнение процентов
        observer.unobserve(entry.target); // удаляет обработчик событий
      }

      if (entry.isIntersecting && entry.target.matches('.tool')) { // действие, когда элемент входит в область наблюдения (по умолчанию это видимая часть страницы)
        entry.target.style.opacity = '1'; // блоки становятся непрозрачными
        observer.unobserve(entry.target); // удаляет обработчик событий
      }

    });
  }

  function percentsAnimation() { // заполнение процентов

    const progressFillBlocks = document.querySelectorAll('.progress__bar_fill'); // шкала с процентами
    const progressCounterBlocks = document.querySelectorAll('.progress__counter'); // цифры с процентами

    const value = [100, 90, 25]; // значения, на которых остановится заполнение

    value.forEach((item, i) => {
      let p = 0;
      const id = setInterval(frame, 10); // тут можно поменять скорость заполнения
      function frame() {
        if (p === item) {
          clearInterval(id);
        } else {
          p++;
          progressFillBlocks[i].style.width = `${p}%`;
          progressCounterBlocks[i].textContent = `${p}%`;
        }
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animation);


/***/ }),

/***/ "./src/js/modules/navigation.js":
/*!**************************************!*\
  !*** ./src/js/modules/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu() {
  // const hamburger = document.querySelector('.hamburger');
  // const menuBlock = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');
  const promoArrow = document.querySelector('.promo__arrow');
  const arrowUp = document.querySelector('.arrow-up');
  const promoBtnsBlock = document.querySelector('.promo__btns');
  const promoSection = document.querySelector('.promo');
  const ancors = [ // якори секций для перехода по ссылкам из меню
    document.querySelector('#about-me'),
    document.querySelector('#resume'),
    document.querySelector('#tools'),
    document.querySelector('#portfolio'),
    document.querySelector('#contacts'),
  ];

  // блок с модальным окном, блок при клике на который открывается окно, [блоки внутри окна, при клике на которые закрывается окно]
  modal('.menu', '.hamburger', ['.menu__close', '.menu__link', '.menu__overlay']);

  function modal(modalBlockSelector, modalOpenSelector, modalCloseSelector) {
    const modalBlock = document.querySelector(modalBlockSelector);
    const modalOpen = document.querySelector(modalOpenSelector);

    modalOpen.addEventListener('click', function() { // открывает меню при нажатии на гамбургер
      modalBlock.classList.add('active');
      document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто меню
      promoArrow.style.display = 'none'; // скрывает стрелку вниз
    });

    modalBlock.addEventListener('click', (event) => {
      modalCloseSelector.forEach((item) => {
        if (event.target.closest(item) && modalBlock.contains(event.target.closest(item))) { // при нажатии на modalCloseSelector
          modalBlock.classList.remove('active'); // закрывает меню
          document.body.style.overflow = ''; // Возвращает прокрутку страницы
          if (document.documentElement.scrollTop === 0) { // если страница не прокручена
            promoArrow.style.display = 'block'; // показывает стрелку вниз
          }
        }
      });
    });
  }

  menuLink.forEach((item, i) => { // клик на ссылки из меню. i определяет номер ссылки
    item.addEventListener('click', () => {
      ancors[i].scrollIntoView(); // перелистывает до якоря с таким же номером
    });
  });

  // hamburger.addEventListener('click', function() { // открывает меню при нажатии на гамбургер
  //   menuBlock.classList.add('active');
  //   document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто меню
  //   promoArrow.style.display = 'none'; // скрывает стрелку вниз
  // });

  // menuBlock.addEventListener('click', (e) => {
  //   if (e.target.closest('.menu__close') && menuBlock.contains(e.target.closest('.menu__close'))) { // закрывает меню при нажатии на крестик
  //     menuBlock.classList.remove('active');
  //     document.body.style.overflow = ''; // Возвращает прокрутку страницы
  //     if (document.documentElement.scrollTop === 0) { // если страница не прокручена
  //       promoArrow.style.display = 'block'; // показывает стрелку вниз
  //     }
  //   }

  //   if (e.target.matches('.menu__overlay')) { // закрывает меню при нажатии на оверлей
  //     menuBlock.classList.remove('active');
  //     document.body.style.overflow = ''; // Возвращает прокрутку страницы
  //     if (document.documentElement.scrollTop === 0) { // если страница не прокручена
  //       promoArrow.style.display = 'block'; // показывает стрелку вниз
  //     }
  //   }

  //   if (e.target.closest('.menu__link') && menuBlock.contains(e.target.closest('.menu__link'))) { // клик на ссылки из меню
  //     menuBlock.classList.remove('active'); // закрывает меню
  //     document.body.style.overflow = ''; // Возвращает прокрутку страницы
  //     if (document.documentElement.scrollTop === 0) { // если страница не прокручена
  //       promoArrow.style.display = 'block'; // показывает стрелку вниз
  //     }
  //     menuLink.forEach((item, i) => { // определяет номер ссылки
  //       if (e.target === item) {
  //         ancors[i].scrollIntoView(); // перелистывает до якоря с таким же номером
  //       }
  //     });
  //   }
  // });

  promoArrow.addEventListener('click', () => { // перелистывает на след. секцию при клике на стрелку вниз
    ancors[0].scrollIntoView();
  });

  arrowUp.addEventListener('click', () => { // при клике на стрелку вверх возвращает в начало страницы
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener('scroll', () => { // скрывает стрелку при прокрутке вниз с секции promo
    if (document.documentElement.scrollTop !== 0) { // document.documentElement.scrollTop это прокрутка до видимого экрана
      promoArrow.style.display = 'none'; // скрывает стрелку вниз
    } else if (document.documentElement.scrollTop === 0) {
      promoArrow.style.display = 'block'; // показывает стрелку вниз
    }
    if (document.documentElement.scrollTop < getComputedStyle(promoSection).height.match(/[-0-9.]+/)[0]) {
      // прокрутка до видимого экрана сравнивается с вычисленной высотой секции promo, рег.выр. отбрасывает 'px', [0] т.к. match возвращает массив
      arrowUp.style.display = 'none';
    } else if (document.documentElement.scrollTop >= getComputedStyle(promoSection).height.match(/[-0-9.]+/)[0]) {
      arrowUp.style.display = 'block';
    }
  });

  promoBtnsBlock.addEventListener('click', (e) => { // клик на кнопки на первом экране, переход на якори
    if (e.target && e.target.matches('#promoBtnFirst')) {
      ancors[3].scrollIntoView();
    }
    if (e.target && e.target.matches('#promoBtnSecond')) {
      ancors[0].scrollIntoView();
    }
  });

  const policyLink = document.querySelector('#policyLink');
  const policyBlock = document.querySelector('.policy');

  policyLink.addEventListener('click', function() { // открывает окно с политикой
    policyBlock.classList.add('active');
    document.body.style.overflow = 'hidden'; // Предотвращает прокрутку страницы, когда открыто окно
  });

  policyBlock.addEventListener('click', (event) => {
    if (event.target && event.target.matches('.policy__overlay')) { // клик на область вокруг блока
      policyBlock.classList.remove('active');
      document.body.style.overflow = ''; // Возвращает прокрутку страницы
    }
    if (event.target && event.target.closest('.policy__close') && policyBlock.contains(event.target)) { // клик на крестик
      policyBlock.classList.remove('active');
      document.body.style.overflow = ''; // Возвращает прокрутку страницы
    }
  });

  // document.addEventListener('keydown', (event) => { // Закрывает окно при нажатии Esc
  //   if (event.code === 'Escape' && modalBlock.classList.contains('show')) {
  //     modalHide(modalBlockSelector);
  //   }
  // });




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigation */ "./src/js/modules/navigation.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/js/modules/animation.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_animation__WEBPACK_IMPORTED_MODULE_1__["default"])();
});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map