// Задание 1
// Создайте HTML-страницу с элементом <div>.
// Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

let div = document.querySelector('div');
div.innerHTML = 'Это <em>курсивный</em> текст';