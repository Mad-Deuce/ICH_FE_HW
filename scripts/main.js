// Задача 1

// Создайте класс Shape, у которого есть метод draw(). 
// Создайте два наследника класса Shape: Rectangle и Circle. 
// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса. 
// Создайте массив, содержащий экземпляры классов Rectangle и Circle. 
// Используйте цикл для вызова метода draw() для каждого элемента массива.

class Shape {
    constructor() { };
    draw() {
        console.log("---default shape---");
    };
};

class Rectangle extends Shape {
    #id = '';
    #width = 0;
    #height = 0;
    constructor(id, width, height) {
        super();
        this.#id = id;
        this.#width = width;
        this.#height = height;
    };
    draw() {
        console.log(`Rectangle: ${this.#id}`);
        console.log(`   width: ${this.#width}`);
        console.log(`   height: ${this.#height}`);
    };
};

class Circle extends Shape {
    #id = '';
    #radius = 0;
    constructor(id, radius) {
        super();
        this.#id = id;
        this.#radius = radius;
    };
    draw() {
        console.log(`Circle: ${this.#id}`);
        console.log(`   radius: ${this.#radius}`);
    };
};

const shapes = [
    {
        id: 1,
        radius: 2,
    },
    {
        id: 2,
        width: 3,
        height: 4,
    },
    {
        id: 3,
        width: 5,
        height: 6,
    },
    {
        id: 4,
        radius: 7,
    },
    {}
];

shapes.forEach(obj => {
    let shape = shapeFactory(obj);
    shape.draw();
});

function shapeFactory(obj) {
    let shape;
    if (Object.keys(obj).length === 2) {
        shape = new Circle(Object.values(obj)[0], Object.values(obj)[1]);
        return shape;
    };
    if (Object.keys(obj).length === 3) {
        shape = new Rectangle(Object.values(obj)[0], Object.values(obj)[1], Object.values(obj)[2]);
        return shape;
    };
    return new Shape();
};