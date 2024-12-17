// 1) Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).

const nums = [1, 5, 6, 78, 25, 64, 1];
console.log(`full array - ${nums}`);
for (let i = 0; i < nums.length; i++) {
    console.log(`   nums[${i}] = ${nums[i]}`);
}
console.log('-----------------------------------------------');

// 2) Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, 
// которые меньше 20, но больше 8. (Используйте цикл). 
// const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]

const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
console.log(`full array - ${arr}`);
console.log(`   8 < item < 20 :`);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 8 && arr[i] < 20) {
        console.log(`        arr[${i}] = ${arr[i]}`);
    }
}
console.log('-----------------------------------------------');

// 3) Создайте массив чисел и найдите минимальное значение.
const arr2 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
console.log(`full array - ${arr}`);
let min = arr2[0];
let minId = 0;
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < min) {
        min = arr2[i];
        minId = i;
    }
}
console.log(`       Min value: arr2[${minId}] = ${min}`);
console.log('-----------------------------------------------');

// 4) *Создайте массив чисел и обновите значение элемента по индексу. 
const arr3 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
console.log(`array before update - ${arr3}`);
arr3[5] = 'new value'
console.log(`array after update - ${arr3}`);
console.log('-----------------------------------------------');

// 5) * Создайте массив слов. Найдите самое длинное слово в массиве. 
// (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).

const arr4 = ['rent', 'string', 'clinic', 'attitude', 'sofa', 'tournament', 'ride', 'devote', 'speaker', 'fantasy'];
console.log(`full array - ${arr4}`);
let maxLength = arr4[0].length;
let maxId = 0;
for (let i = 1; i < arr4.length; i++) {
    if (arr4[i].length > maxLength) {
        maxLength = arr4[i].length ;
        maxId = i;
    }
}
console.log(`       Max length string in array: arr4[${maxId}] = "${arr4[maxId]}" (length - ${maxLength})`);