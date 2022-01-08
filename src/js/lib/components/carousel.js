import $ from "../core";
 
$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width; //  ширина каждого отдельного слайда        
        const slides = this[i].querySelectorAll(".carousel-item");     // все слайды которые находятся внтури слайдера
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        
        slidesField.style.width = 100 * slides.length + "%";       // устанавливаем ширину которая будет зависит от колличества слайдов
        slides.forEach(slide => {      // ширина для каждого отдельного слайда что б она была у всех слайдах одинаковая
            slide.style.width = width;
        });    

        let offset = 0;  // отслежуем какой слайд сейчас активный и на сколько смещать slidesField / начальное положение слайдера
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, "") * (slides.length - 1))) { // если слайды закончились, тоесть дошли до конца
                offset = 0;                                                     // то слайдер устанавливаем у начальное положение
            } else {
                offset += +width.replace(/\D/g, ""); // добавляем ширину каждого отдельного слайда
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) { // дошли до последнего слайда (это нужно для индикаторов)
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            // убираем класс активности
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');

            /* dots.forEach(dot => dot.classList.remove('active')); 
            dots[slideIndex].classList.add('active'); */

        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) { // если слайды закончились, тоесть дошли до конца
                offset = +width.replace(/\D/g, "") * (slides.length - 1);                                                     // то слайдер устанавливаем у начальное положение
            } else {
                offset -= +width.replace(/\D/g, ""); // убираем ширину каждого отдельного слайда
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

                
            if (slideIndex == 0) { // слайд находится в первой позиуии
                slideIndex = slides.length - 1; // переходим к последнему слайду
            } else {
                slideIndex--; // перемещаемся по слайду назад
            }
            dots.forEach(dot => dot.classList.remove('active')); 
            dots[slideIndex].classList.add('active');
            
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            offset = +width.replace(/\D/g, "") * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
};

$('.carousel').carousel(); 

// тот же код но с дополнительной анимацией 
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