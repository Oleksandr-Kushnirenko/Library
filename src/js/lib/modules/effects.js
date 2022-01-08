import $ from '../core';

$.prototype.animateOverTime = function(dur, cb, fin) {  // техническая функция которая занимается запуском анимации
    let timeStart;

    function _animateOverTime(time) {    // ф-я которая запускается до определенного условия; если условие не выполняется - то анимацию прекращаем
        if(!timeStart) {                 // первичная установка временных промежутков
            timeStart = time;          // стартовое время
        }
        let timeElapsed = time - timeStart;     // вычисление сколько времени прошло - как долго длится анимация, какой ее прогрес и т.д.
        let complection = Math.min(timeElapsed / dur, 1);    // отвечает за изменение параметров на странице
    
        cb(complection);

        if (timeElapsed < dur) { // окончание анимации
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === "function") {
                fin();
            }
        }
    }
    return _animateOverTime;
};

// метод, показывает определенные елементы через прозрачность, через определенный промижуток времени на странице
$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || "block";

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }
    return this;
};

// метод, скрывает определенные елементы через прозрачность, через определенный промижуток времени на странице


$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
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

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {

        if (window.getComputedStyle(this[i]).display === "none") {  // проверяем показан ли елемент в даный момент на текущей странице
            $(this[i]).fadeIn(dur, display, fin);
        } else {
            $(this[i]).fadeOut(dur, fin);
        }
    }
    return this;
};

// это аналог предыдущему коду
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

