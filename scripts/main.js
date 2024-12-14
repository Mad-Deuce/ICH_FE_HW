// Задания 1. 
// Объявите две переменные firstName и lastName и присвойте им ваши имя и фамилию.
// С помощью конкатенации строк создайте третью переменную greeting, 
// содержащую приветствие в формате "Привет, Имя Фамилия!".
// Выведите переменную greeting в консоль.

let firstName = 'Petro';
let lastName = 'Zolotukhin';
let greeting = 'Hello, ' + firstName + ' ' + lastName;
console.log(greeting);

// Задания 2. 
// Объявите переменную month и присвойте ей значение от 1 до 12, представляющее месяц.
// Используя условия if, else if и else, определите текущий сезон (весна, лето, осень, зима) и выведите его в консоль. 
// (Можно попробовать решить задачу с помощью switch )

month = 9;

switch (month) {
    case 12: { }
    case 1: { }
    case 2: {
        console.log("winter");
        break;
    }
    case 4: { }
    case 5: { }
    case 3: {
        console.log("spring");
        break;
    }
    case 6: { }
    case 7: { }
    case 8: {
        console.log("summer");
        break;
    }
    case 9: { }
    case 10: { }
    case 11: {
        console.log("autumn");
        break;
    }
    default: {
        console.log("error");
        break;
    }
}

// Задания 3.*

// Создайте переменную sentencePart1 и присвойте ей начало предложения (например, "Я люблю").
// Создайте переменную sentencePart2 и присвойте ей завершение предложения (например, "программирование").
// С помощью конкатенации строк создайте переменную completeSentence, объединяющую обе части предложения.
// Выведите переменную completeSentence в консоль.

let sentencePart1 = 'Я люблю';
let sentencePart2 = 'программирование';
let completeSentence = sentencePart1 + ' ' + sentencePart2;
console.log(completeSentence);

// Задания 4.*
// Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7,
// представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее).
// Используя конструкцию switch, определите текущий день недели и выведите его в консоль.
// Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)

// let dayOfWeek=2;
let dayOfWeek=4;

switch (dayOfWeek) {
    case 1: {
        console.log("sunday");
        break;
    }
    case 2: {
        console.log("monday");
        break;
    }
    case 3: {
        console.log("tuesday");
        break;
    }
    case 4: {
        console.log("wednesday");
        break;
    }
    case 5: {
        console.log("thursday");
        break;
    }
    case 6: {
        console.log("friday");
        break;
    }
    case 7: {
        console.log("saturday");
        break;
    }
    default: {
        console.log("error");
        break;
    }
}