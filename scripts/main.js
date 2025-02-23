
// Задание 1

// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1, 
// в блоке catch сделать вывод консоль сообщения об ошибке. 
// Для проверки блока catch сделать намеренную ошибку в url запроса.

async function fetchData(url) {
    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error('HTTP status failed', res.status);
        }
        console.log('Done');
    } catch (error) {
        console.log('Custom error handle:', error);
    }
};

fetchData('https://j2sonplaceholder.typicode.com/posts?userId=1')   // wrong url
fetchData('https://jsonplaceholder.typicode.com/posts?userId=1')


// ---------------------------------------------------------------------------------------------------------------------------

// Задание 2

// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.

function div(a, b) {
    try {
        if (b === 0) {
            throw new Error('divider (second arg) is zero');
        }
        return a / b;
    } catch (error) {
        console.log('Custom error handle:', error);
        return 0;
    }
};

console.log(div(8, 2));
console.log(div(8, 0));
