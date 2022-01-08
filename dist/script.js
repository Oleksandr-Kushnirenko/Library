/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "accordion-head--active";
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "accordion-content--active";
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;

  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive);
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive);

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this[i].nextElementSibling.style.maxHeight = "0px";
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width; //  ширина каждого отдельного слайда        

    const slides = this[i].querySelectorAll(".carousel-item"); // все слайды которые находятся внтури слайдера

    const slidesField = this[i].querySelector('.carousel-slides');
    const dots = this[i].querySelectorAll('.carousel-indicators li');
    slidesField.style.width = 100 * slides.length + "%"; // устанавливаем ширину которая будет зависит от колличества слайдов

    slides.forEach(slide => {
      // ширина для каждого отдельного слайда что б она была у всех слайдах одинаковая
      slide.style.width = width;
    });
    let offset = 0; // отслежуем какой слайд сейчас активный и на сколько смещать slidesField / начальное положение слайдера

    let slideIndex = 0;
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();

      if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
        // если слайды закончились, тоесть дошли до конца
        offset = 0; // то слайдер устанавливаем у начальное положение
      } else {
        offset += +width.replace(/\D/g, ""); // добавляем ширину каждого отдельного слайда
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length - 1) {
        // дошли до последнего слайда (это нужно для индикаторов)
        slideIndex = 0;
      } else {
        slideIndex++;
      } // убираем класс активности


      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
      /* dots.forEach(dot => dot.classList.remove('active')); 
      dots[slideIndex].classList.add('active'); */
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault();

      if (offset == 0) {
        // если слайды закончились, тоесть дошли до конца
        offset = +width.replace(/\D/g, "") * (slides.length - 1); // то слайдер устанавливаем у начальное положение
      } else {
        offset -= +width.replace(/\D/g, ""); // убираем ширину каждого отдельного слайда
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 0) {
        // слайд находится в первой позиуии
        slideIndex = slides.length - 1; // переходим к последнему слайду
      } else {
        slideIndex--; // перемещаемся по слайду назад
      }

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    const sliderId = this[i].getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`#${sliderId} .carousel-indicators li`).click(e => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * slideTo;
      slidesField.style.transform = `translateX(-${offset}px)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').carousel(); // тот же код но с дополнительной анимацией 

/* 
$.prototype.carousel = function (autoPlayDur = 0) {
    let paused;

    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width,
              slidesField = this[i].querySelector('.carousel-slides'),
              slides = [...this[i].getElementsByClassName('carousel-item')],
              dots = [...this[i].getElementsByTagName('li')];

        let offset = 0; // отслеживает положение слайдера
        let slideIndex = 0;

        slidesField.style.width = 100 * slides.length + "%";
        slides.forEach((slide) => {
            slide.style.width = width;
        });

        const changeSlide = () => {
            slidesField.style.transform = `translateX(${-offset}px)`;
            $(slidesField).fadeOut(400, () => {
                $(slidesField).fadeIn(400, 'flex');
            });

            dots.forEach((dot) => dot.classList.remove("active"));
            dots[slideIndex].classList.add('active');
        };

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();

            if (offset == 0) {
                offset = +width.replace(/\D/g, "") * (slides.length - 1);
                slideIndex = slides.length - 1;
            } else {
                offset -= +width.replace(/\D/g, "");
                slideIndex--;
            }
            changeSlide();
        });

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
                offset = 0;
                slideIndex = 0;
            } else {
                offset += +width.replace(/\D/g, "");
                slideIndex++;
            }
            changeSlide();
        });

        const sliderId = this[i].getAttribute("id");

        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, "") * slideTo;
            changeSlide();
        });

        const activateAnimation = () => {
            if (autoPlayDur) {
                paused = setInterval(function() {
                    let event = new Event('click');

                    document
                        .querySelector(`#${sliderId} > a.carousel-next`)
                        .dispatchEvent(event);

                }, autoPlayDur);
            }
        };
        activateAnimation();
        
        this[0].addEventListener("mouseenter", () => {
            clearInterval(paused);
        });
        this[0].addEventListener("mouseleav", () => {
            activateAnimation();
        });
    }
};
  
 $("#example").carousel(9000);
  */
// Динамическое создание Слайдера
// setCarousel = {width, height, slides: [{src: "", alt: ""}]}

/* 
$.prototype.createCarousel = function(setCarousel) {
    for (let i = 0; i < this.length; i++) {
        const countSlides = setCarousel.slides.length;

        this[i].style.width = setCarousel.width + "px";
        this[i].style.height = setCarousel.height + "px";

        this[i].innerHTML = `
            <ol class="carousel-indicators"></ol> 
            <div class="carousel-inner">
                <div class="carousel-slides"></div>
            </div>
            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
        `; 

        for (let j = 0; j < countSlides; j++) {
            const dotItem = document.createElement('li'),
                  slideItem = document.createElement('div'),
                  slideImg = document.createElement('img');

            dotItem.setAttribute("data-slide-to", `${j}`);
            this[i].querySelector(".carousel-indicators").appendChild(dotItem);

            if (j == 0) {
                dotItem.classList.add('active');
            }

            this[i].querySelector('.carousel-slides').appendChild(slideItem);
            slideItem.classList.add("carousel-item");
            slideItem.style.width = this[i].style.width;
            slideItem.appendChild(slideImg);
            slideImg.setAttribute('src', setCarousel.slides[j]["src"]);
            slideImg.setAttribute('alt', setCarousel.slides[j]["alt"]);
        } 
    }
    return this;
};
 */

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    // const id = this[i].getAttribute("id");
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr("id");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
}; // инициализация


Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-toggle").dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('data-target'),
          scroll = calcScroll();
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = "hidden"; // блокируем страницу под модальным окном, страница не пролистывается

      document.body.style.marginRight = `${scroll}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('target').fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      // при клике на подложку закрываем модальное окно
      if (e.target.classList.contains('modal')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

function calcScroll() {
  let div = document.createElement('div');
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
} // метод который который генерирует модальное окно програмно


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div'); // создаем мод окно (обертка)

    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute("data-target").slice(1)); // $(modal).setAttr('id', $(this[i]).getAttr("data-target").slice(1));
    // btns = {count: num, settings: [[text, classNames=[], close, cb]]}

    const buttons = []; // создание кнопок мод окна

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0]; // передаем текст из настроек у внутрь кнопки

      if (btns.settings[j][2]) {
        btn.setAttribute("data-close", "true");
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;
    modal.querySelector(".modal-footer").append(...buttons);
    document.body.appendChild(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute("data-target")).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass("tab-item--active").siblings().removeClass('tab-item--active').closest(".tab").find(".tab-content").removeClass('tab-content--active') // далее необходимо узнать номер елемента у табах куда мы кликнули и этот индекс передать дальше
      .eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass("tab-content--active");
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-tabpanel] .tab-item").tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector); // генерируется обьект
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {} возвращается пустой обьект
  }

  if (selector.tagName) {
    // проверяем - является ли этот елем тегом, используя при этом свойство tagName
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/carousel */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // метод, который позволяет быстро менять  html структуру внутри какого-то елемента; так же может получать содержимое этого елемента

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content; // когда передаем аргумент с контентом и соответственно замещать внутри елемента
    } else {
      return this[i].innerHTML; // если конткнт не был передан то тогда мы понимаем что мы хотим получить содержимое этого елемента
    }
  }

  return this;
}; // метод для получения определенного елемента по номеру


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length; // превращаем обьект в маасив и используем свойство length которое есть в массиве

  for (let i = 0; i < objLength; i++) {
    // очищаем полностью обьект, он будет пустой так как мы все удалили из него
    delete this[i];
  }

  this[0] = swap; // формируем заново обьект, в котором будет один елемент и одно свойство с которым мы в дальнейшем будем работать

  this.length = 1;
  return this;
}; // метод для получения номера елемента по порядку, среди тех елементов которые имеют общего родителя;


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode; // получили родителя искомого елемента

  const childs = [...parent.children]; // получаем html колекцию, псевдомассив. Поэтому его превращаем в стандартный массив

  const findMyIndex = item => {
    return item == this[0];
  };

  return childs.findIndex(findMyIndex);
}; // метод, который находит елемент среди уже выбраных


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; // общие количество

  let counter = 0; // записанные елементы

  const copyObj = Object.assign({}, this); // создаем копию обьекта, в каждом скопированном элементе мы внутри попробуем найти елементы подходящие под заданный селектор selector 

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector); // в копии ищим заданный селектор и записываем его в arr

    if (arr.length == 0) {
      // если елементы не найдены
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      //если елементы найдени то работаем с this и записываем в него найденные елементы
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    // удаляем остаток
    delete this[numberOfItems];
  }

  return this;
}; // метод, определяет ближайший блок по заданому селектору


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) === null) {
      return this;
    } else {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    // удаляем остаток, очистка
    delete this[counter];
  }

  return this;
}; // метод, получает все соседние елементы не включая сам елемент


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0; // общие количество

  let counter = 0; // записанные елементы

  const copyObj = Object.assign({}, this); // создаем копию обьекта, в каждом скопированном элементе мы внутри попробуем найти елементы подходящие под заданный селектор selector 

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children; // в копии ищим заданный селектор и записываем его в arr

    for (let j = 0; j < arr.length; j++) {
      //если елементы найдени то работаем с this и записываем в него найденные елементы
      if (copyObj[i] === arr[j]) {
        // если этот елемент будет равен тому елементу который сейчас перебирается в arr это тот елемент на котором собственно и произошло действие то мы его пропускаем
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    // удаляем остаток
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(name)) {
      this[i].setAttribute(name, value);
    } else {
      continue;
    }
  }

  return this;
}; // работает


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(name)) {
      continue;
    }

    return this[i].getAttribute(name);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name)) {
      this[i].removeAttribute(name);
    } else {
      continue;
    }
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name, value)) {
      this[i].removeAttribute(name);
    } else {
      this[i].setAttribute(name, value);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  // спред оператор, нужен для того если мы хотим добавить несколько классов сразу
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...arguments); // рест оператор, мы разварачиваем все имена классов которые были переданы во внутрь этой функции
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "";
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "none";
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = "";
    } else {
      this[i].style.display = "none";
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  // техническая функция которая занимается запуском анимации
  let timeStart;

  function _animateOverTime(time) {
    // ф-я которая запускается до определенного условия; если условие не выполняется - то анимацию прекращаем
    if (!timeStart) {
      // первичная установка временных промежутков
      timeStart = time; // стартовое время
    }

    let timeElapsed = time - timeStart; // вычисление сколько времени прошло - как долго длится анимация, какой ее прогрес и т.д.

    let complection = Math.min(timeElapsed / dur, 1); // отвечает за изменение параметров на странице

    cb(complection);

    if (timeElapsed < dur) {
      // окончание анимации
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === "function") {
        fin();
      }
    }
  }

  return _animateOverTime;
}; // метод, показывает определенные елементы через прозрачность, через определенный промижуток времени на странице


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || "block";

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
}; // метод, скрывает определенные елементы через прозрачность, через определенный промижуток времени на странице


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = "none";
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      // проверяем показан ли елемент в даный момент на текущей странице
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(dur, display, fin);
    } else {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(dur, fin);
    }
  }

  return this;
}; // это аналог предыдущему коду

/* 
$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        let anim;
    
        if (window.getComputedStyle(this[i]).display === "none") {
            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };
            this[i].style.display = display || "block";
    
            anim = this.animateOverTime(dur, _fadeIn, fin);
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = "none";
                }
            };
            anim = this.animateOverTime(dur, _fadeOut, fin);
        }
        requestAnimationFrame(anim);
    }
    return this;
}; */

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // добавление обработчика события

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  // ф-я которая принмает два аргумента: обработчик события и колбек (который должен выпонится после того как произойдет событие)
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
}; // удаляем обработчик события


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  // ф-я которая принмает два аргумента: обработчик события и колбек (который должен выпонится после того как произойдет событие)
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      // когда handler был передан и мы на элемент навешиваем обработчик события клика с выполнением той ф-ции которая была переданна как аргумент 
      this[i].addEventListener('click', handler);
    } else {
      // когда клик будет использоваться без перебачи каких-либо аргументов, мы виртуально кликаем по этому элементу 
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataTypeAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case "json":
      return await res.json();

    case "text":
      return await res.text();

    case "blob":
      return await res.blob();
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data) {
  let dataTypeAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  switch (dataTypeAnswer) {
    case "json":
      return await res.json();

    case "text":
      return await res.text();

    case "blob":
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 // $(".active").click(sayHello);
// $(".active").off("click", sayHello);

/* $("button").on("click", function() {
    $(this).toggleClass("active");           // тот елемент на который мы нажали. Но тут this это html елемент
});
 */
// $(".active").toggleAtrr("id", "test");
// console.log($("button").html("Hellono"));
// console.log($(".btn-primary").getAttr("id"));

/* $("button").on("click", function() {
    $('div').eq(1).toggleClass("active");           
}); */

/* $("div").click(function(){
    console.log($(this).index());
}); */
// console.log($('div').eq(2).find(".some"));
// console.log($(".some").closest(".findme").addClass("fwfdsf"));
// console.log($('.findme').siblings());
// $('button').fadeIn(1800);

/* 
$("#first").on('click', ()=> {
    $('div').eq(1).fadeOut(800);
});
$("[data-count='second']").on('click', ()=> {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
}); */

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#first").on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(1).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("[data-count='second']").on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('div').eq(2).fadeToggle(800);
});
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('button').eq(2).on('click', () => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-500').fadeToggle(800);
});
/* 
// если dropdown-menu формируется динамически
$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn"> 
            <a href="#" class="dropdown-item">Action #1</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>
    `
);
$(".dropdown-toggle").dropdown(); */

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").click(() => Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").createModal({
  text: {
    title: "Modal title",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores doloribus, nobis libero."
  },
  btns: {
    count: 3,
    settings: [["Close", ["btn-danger", "mr-10"], true], ["save changes", ['btn-success'], false, () => {
      alert("Данные сохранены");
    }], ["Another btn", ['btn-warning', 'ml-10'], false, () => {
      alert('hello world');
    }]]
  }
}));
Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger2").click(() => Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger2").createModal({
  text: {
    title: "Modal title 2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores doloribus, nobis libero."
  },
  btns: {
    count: 3,
    settings: [["Close", ["btn-danger", "mr-10"], true], ["save changes", ['btn-success'], false, () => {
      alert("Данные сохранены");
    }], ["Another btn", ['btn-warning', 'ml-10'], false, () => {
      alert('hello world');
    }]]
  }
}));
/* 
$("#example-2")
.createCarousel({
  width: 850,
  height: 450,
  slides: [
     {
        src: "https://tushlar.ru/wp-content/uploads/2021/02/tushda-mashina-1.jpg",
        alt: "white-car",
     },
     {
        src: "https://stockphoto.com/assets/landingpage/images/Depositphotos_48265849_original.jpg",
        alt: "red-car",
     },
     {
        src: "https://img2.goodfon.ru/original/1280x720/7/99/lamborghini-murcielago-5124.jpg",
        alt: "yellow-car",
     },
  ],
})
.carousel(8000);
 */

/* 
$().get("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => console.log(res));
 */

/***/ })

/******/ });
//# sourceMappingURL=script.js.map