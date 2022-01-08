import $ from "../core";

// метод, который позволяет быстро менять  html структуру внутри какого-то елемента; так же может получать содержимое этого елемента
$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;  // когда передаем аргумент с контентом и соответственно замещать внутри елемента
        } else {
            return this[i].innerHTML;  // если конткнт не был передан то тогда мы понимаем что мы хотим получить содержимое этого елемента
        }
    }
    return this;
};

// метод для получения определенного елемента по номеру
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;  // превращаем обьект в маасив и используем свойство length которое есть в массиве

    for (let i = 0; i < objLength; i++) {  // очищаем полностью обьект, он будет пустой так как мы все удалили из него
        delete this[i];
    }
    this[0] = swap;         // формируем заново обьект, в котором будет один елемент и одно свойство с которым мы в дальнейшем будем работать
    this.length = 1;
    return this;
};

// метод для получения номера елемента по порядку, среди тех елементов которые имеют общего родителя;
$.prototype.index = function() {
    const parent = this[0].parentNode; // получили родителя искомого елемента
    const childs = [...parent.children]; // получаем html колекцию, псевдомассив. Поэтому его превращаем в стандартный массив

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

// метод, который находит елемент среди уже выбраных

$.prototype.find = function(selector) {
    let numberOfItems = 0;      // общие количество
    let counter = 0;        // записанные елементы

    const copyObj = Object.assign({}, this);      // создаем копию обьекта, в каждом скопированном элементе мы внутри попробуем найти елементы подходящие под заданный селектор selector 

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);  // в копии ищим заданный селектор и записываем его в arr
        if (arr.length == 0) {    // если елементы не найдены
            continue;
        }

        for (let j = 0; j < arr.length; j++) {   //если елементы найдени то работаем с this и записываем в него найденные елементы
            this[counter] = arr[j];
            counter++;
        }
        numberOfItems += arr.length;
    }
    this.length = numberOfItems;
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {     // удаляем остаток
        delete this[numberOfItems];
    }

    return this;
}; 

// метод, определяет ближайший блок по заданому селектору

$.prototype.closest = function(selector) {
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
    for (; counter < objLength; counter++) {     // удаляем остаток, очистка
        delete this[counter];
    }

    return this;
};

// метод, получает все соседние елементы не включая сам елемент

$.prototype.siblings = function() {
    let numberOfItems = 0;      // общие количество
    let counter = 0;        // записанные елементы

    const copyObj = Object.assign({}, this);      // создаем копию обьекта, в каждом скопированном элементе мы внутри попробуем найти елементы подходящие под заданный селектор selector 

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;  // в копии ищим заданный селектор и записываем его в arr

        for (let j = 0; j < arr.length; j++) {   //если елементы найдени то работаем с this и записываем в него найденные елементы
            if (copyObj[i] === arr[j]) {       // если этот елемент будет равен тому елементу который сейчас перебирается в arr это тот елемент на котором собственно и произошло действие то мы его пропускаем
                continue;
            }
            this[counter] = arr[j];
            counter++;
        }
        numberOfItems += arr.length - 1;
    }
    this.length = numberOfItems;
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {     // удаляем остаток
        delete this[numberOfItems];
    }

    return this;
}; 


