// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. 
// По пути(path)  /users получить всех пользователей. 
// На веб-странице для каждого пользователя отрисовать карточку 
// и указать следующие данные: id, username, email, address.city, phone и company.name. 

// Стили добавляем произвольно.


fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
    .then(res => res.json())
    .then(json => render(json));

function render(array) {

    const requiredFields = ['id', 'username', 'email', 'address.city', 'phone', 'company.name'];

    array.forEach(item => {
        let div = document.createElement('div');
        let flatItem = toFlatObj(item);

        requiredFields.forEach(field => {
            let pElem = document.createElement('p');
            pElem.innerHTML = `${field} - ${flatItem[field]}`;
            div.appendChild(pElem);
        });

        div.style.border = 'solid 1px red';
        div.style.margin = '8px';
        div.style.padding = '8px';

        document.body.appendChild(div);
    });
};

function toFlatObj(obj, prefix = '') {
    let res = {};
    prefix = prefix == '' ? '' : (prefix + '.');
    Object.keys(obj).forEach(key => {
        if (typeof (obj[key]) === 'object') {
            Object.assign(res, toFlatObj(obj[key], prefix + key))
        } else {
            res[prefix + key] = obj[key];
        };
    });
    return res;
};

