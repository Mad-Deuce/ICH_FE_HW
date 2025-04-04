// Создать объект counter, который будет иметь свойство count(по умолчанию значение равно 0) 
// и методы increment и decrement для увеличения и уменьшения значения count соответственно.


function Counter() {
    this.count = 0;
};

Counter.prototype.increment = function () {
    this.count += 1;
};
Counter.prototype.decrement = function () {
    this.count -= 1;
};

const counter = new Counter();

counter.increment();
console.log(counter.count); // Ожидаемый вывод: 1

counter.decrement();
console.log(counter.count); // Ожидаемый вывод: 0