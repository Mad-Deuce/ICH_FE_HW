// Задание 1

// Создайте объект, представляющий человека, с полями "имя" и "возраст". 
// Выведите информацию о человеке в консоль.

let person = {
    name: 'Poioyuyi',
    age: 25,
};
console.log(`NAME - ${person.name}, AGE - ${person.age}`);
console.log('--------------------------------------------------');

// Задание 2

// Создайте массив объектов книг(с полями "название" и "автор") 
// и выведите информацию о каждой книге в консоль. 

let books = [
    { title: 'book1', author: 'author1' },
    { title: 'book2', author: 'author2' },
    { title: 'book3', author: 'author3' },
    { title: 'book4', author: 'author4' },
    { title: 'book5', author: 'author5' },
    { title: 'book6', author: 'author6' },
];
for (let i = 0; i < books.length; i++) {
    console.log(`BOOK TITLE - ${books[i].title}, AUTHOR - ${books[i].author}`);
}
console.log('--------------------------------------------------');

// Задание 3 **

// Дан объект, который олицетворяет собой прямоугольник и длины его сторон 
// const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, 
// в s должна быть вычислена площадь прямоугольника, а в p его периметр.

const rectangle = { a: 10, b: 35 };
rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 * (rectangle.a + rectangle.b);
console.log(rectangle);
console.log('--------------------------------------------------');

// Задание 4 *

// Создайте массив объектов, представляющих различные фрукты. 
// Используйте цикл для фильтрации только тех фруктов, 
// которые имеют цвет "красный", и выведите их в консоль.

let fruits = [
    { name: 'Apple', color: 'green' },
    { name: 'Orange', color: 'orange' },
    { name: 'Cherry', color: 'red' },
    { name: 'Cranberry', color: 'red' },
    { name: 'Banana', color: 'yellow' },
];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].color === 'red') {
        console.log(fruits[i]);
    }
}
console.log('--------------------------------------------------');

// Задание 5 *

// Создайте объект `playlist` с песнями в виде массива объектов.
// Выведите информацию о каждой песне в консоль

let playlist = {
    songs: [
        { name: 'song1', playLength: 120 },
        { name: 'song2', playLength: 150 },
        { name: 'song3', playLength: 134 },
        { name: 'song4', playLength: 201 },
        { name: 'song5', playLength: 321 },
        { name: 'song6', playLength: 123 },
    ]
};

for (let i = 0; i < playlist.songs.length; i++) {
    console.log(`${i + 1} - ${playlist.songs[i].name} - ${playlist.songs[i].playLength}`);
}
