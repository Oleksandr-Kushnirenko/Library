import $ from "../core";

// добавление обработчика события
$.prototype.on = function(eventName, callback){    // ф-я которая принмает два аргумента: обработчик события и колбек (который должен выпонится после того как произойдет событие)
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);    
    }
    return this;
};

// удаляем обработчик события
$.prototype.off = function(eventName, callback){    // ф-я которая принмает два аргумента: обработчик события и колбек (который должен выпонится после того как произойдет событие)
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);    
    }
    return this;
};

$.prototype.click = function(handler){   
    for (let i = 0; i < this.length; i++) {
        if (handler) {                           // когда handler был передан и мы на элемент навешиваем обработчик события клика с выполнением той ф-ции которая была переданна как аргумент 
            this[i].addEventListener('click', handler);
        } else { // когда клик будет использоваться без перебачи каких-либо аргументов, мы виртуально кликаем по этому элементу 
            this[i].click();
        }                                          
    }
    return this;
};