// Задание 1

// Создайте массив объектов с полями "name" и "price". 
// Реализуйте функцию hasExpensiveItem, используя метод some, 
// чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const products = [
    { name: "Alice", price: 25 },
    { name: "Bob", price: 50 },
    { name: "Charlie", price: 22 }
];

function hasExpensiveItem(arr) {
    return arr.some(item => item.price > 50);
}

console.log(hasExpensiveItem(products));
