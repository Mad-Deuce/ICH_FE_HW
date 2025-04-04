// Задание 1

// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1.
//  Результат вывести в консоль.

(async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' });
    let json = await res.json();
    console.log(json);
})();


// ------------------------------------------------------------------------------------------------------
// Задание 2

// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. 
// Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.

(async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', { method: 'GET' });
    let json = await res.json();
    console.log(json);
})();