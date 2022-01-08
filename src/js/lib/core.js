const $ = function(selector){
    return new $.prototype.init(selector); // генерируется обьект
};
$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {} возвращается пустой обьект
    }

    if (selector.tagName) {        // проверяем - является ли этот елем тегом, используя при этом свойство tagName
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

export default $;
