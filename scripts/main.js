const login = 'user';
const password = 'password';

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let output = document.querySelector('#output-msg');
    let loginElem = event.target.elements['login'];
    let passwordElem = event.target.elements['password'];

    if (loginElem.value !== login) {
        error();
        output.innerHTML = 'Enter correct login';
        return;
    }

    if (passwordElem.value !== password) {
        error();
        output.innerHTML = 'Enter correct password';
        return;
    }

    done();
    output.innerHTML = 'successful authentication';
    loginElem.value = '';
    passwordElem.value = '';


    function error() {
        output.classList.remove('color-done');
        output.classList.add('color-error');
    }
    function done() {
        output.classList.add('color-done');
        output.classList.remove('color-error');
    }
});