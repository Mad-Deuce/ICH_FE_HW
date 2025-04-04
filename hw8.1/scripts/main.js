// Задание 1

// Создайте функцию, которая принимает массив чисел в качестве параметра 
// и возвращает произведение всех элементов массива.
// Затем вызовите функцию и выведите результат в консоль.

const arr = [5, 7, 2, 4];
const multiply = (arr) => arr.reduce((acc, num) => acc * num, 1);
console.log(multiply(arr));


// Задание 2

// Сумма элементов массива: Создайте массив чисел.
// Напишите код, который использует цикл while для подсчета суммы всех элементов массива.
const arr2 = [5, 7, 2, 4];
function sum(arr) {
    let i = 0;
    let res = 0;
    while (i < arr.length) {
        res += arr[i];
        i++;
    }
    return res;
}
console.log(sum(arr2));