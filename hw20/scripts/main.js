// Implement a function that will create list items based on an array of data. 
// Each list item should contain a button that, when clicked, will delete that item from the list.

const url = 'https://jsonplaceholder.typicode.com/posts/';
fetchData();

async function fetchData() {
    try {
        let response = await fetch(url, { method: 'GET' });
        let data = await response.json();
        renderList(data);
    } catch (error) {
        console.log(error);
    }
};

async function removeItem(id) {
    try {
        let response = await fetch(url + id, { method: 'DELETE' });
        if (response.ok) return true;
        return  false;
    } catch (error) {
        console.log(error);
    }
};

function renderList(data) {
    let ul = document.createElement('ul');
    data.forEach((item) => {
        let li = document.createElement('li');
        li.setAttribute('id', item.id);
        li.innerHTML = item.title;

        let btn = document.createElement('button');
        btn.innerHTML = "Delete";
        li.appendChild(btn);

        ul.appendChild(li);
    });
    ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            let id = event.target.parentElement.id;
            if (removeItem(id)) ul.removeChild(event.target.parentElement);
        }
    })

    document.body.appendChild(ul);
};

