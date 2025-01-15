// Задание 1

// У вас есть список элементов(<li>). 
// При загрузке страницы проверьте условие (например, длина списка). 
// Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

let ul = document.createElement('ul');
document.body.appendChild(ul);
for (let i = 1; i < 7; i++) {
    let li = document.createElement('li');
    li.id = `li${i}`;
    li.innerHTML = `original item ${i}`
    ul.appendChild(li);
}

let liItems = ul.querySelectorAll('li');
if (liItems.length > 5) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `new item`
    // ul.replaceChild(newLi, liItems[liItems.length - 1]);
    ul.replaceChild(newLi, ul.lastChild);
}

