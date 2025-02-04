// Задание 1

// Создайте простую веб-страницу, где пользователь может вводить текст заметки. 
// Рядом с полем ввода должна быть кнопка "Сохранить", 
// которая сохраняет введенный текст в localStorage. 
// Также добавьте блок, в котором будет отображаться последняя сохраненная заметка. 
// При обновлении страницы заметка должна оставаться на месте.

function writeLocalStorage(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
};
function readLocalStorage(k) {
    return JSON.parse(localStorage.getItem(k));
};
function appendTask(taskValue) {
    if (!taskValue || taskValue === "") return;
    let ul = document.querySelector('#tasks');
    let li = document.createElement('li');
    li.innerHTML = taskValue;
    ul.appendChild(li);
}

const tasks = Array.isArray(readLocalStorage('tasks')) ? readLocalStorage('tasks') : [];

let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');

tasks.forEach(task => appendTask(task));

btn.addEventListener('click', () => {
    if (!inp.value || inp.value === "") return;
    if (tasks.some(task => task === inp.value)) return;

    appendTask(inp.value);
    tasks.push(inp.value);
    writeLocalStorage('tasks', tasks);
    inp.value = "";
});