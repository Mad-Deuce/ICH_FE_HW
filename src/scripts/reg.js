const regForm = document.querySelector('.reg-form');
const regName = regForm.querySelector('.reg-name');
const regPhone = regForm.querySelector('.reg-phone');
const regEmail = regForm.querySelector('.reg-email');
const regPassword = regForm.querySelector('.reg-password');
const regBtn = regForm.querySelector('.reg-btn');
const regMsg = regForm.querySelector('.reg-msg');

// Минимум 2 символа
// Максимум 24 символа
// Только буквы
function isNameValid(name) {
    const regex = /^([a-zA-Z]{2,24})$/;
    return regex.test(name);
}

// Первый символ +
// Максимум 12 чисел
// Минимум 8 чисел
// Только числа
function isPhoneValid(phone) {
    // const regex = /^(\+\d{1,3}[ -])?\d{3}[ -]\d{3}[ -]\d{2}[ -]\d{2}$/;
    const regex = /^\+\d{8,12}$/;
    return regex.test(phone);
}

// Наличие символа@
// Минимум 7 символов
function isEmailValid(email) {
    // const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = /^[a-zA-Z]{4,}@[a-zA-Z]{1,}\.[a-zA-Z]{1,}$/;
    return regex.test(email);
}


// Минимум 5 символов
// максимум 26 символов
function isPasswordValid(password) {
    // const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const regex = /^.{5,26}$/;
    return regex.test(password);
}


regBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const users = localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : [];

    if (!isNameValid(regName.value)) {
        regName.classList.replace('border-success', 'border-error');
        regMsg.innerText = 'Name is not valid';
        regMsg.style.color = 'red';
        return;
    } else {
        regName.classList.replace('border-error', 'border-success');
    };

    if (!isPhoneValid(regPhone.value)) {
        regPhone.classList.replace('border-success', 'border-error');
        regMsg.innerText = 'Phone number is not valid';
        regMsg.style.color = 'red';
        return;
    } else {
        regPhone.classList.replace('border-error', 'border-success');
    };

    if (!isEmailValid(regEmail.value)) {
        regEmail.classList.replace('border-success', 'border-error');
        regMsg.innerText = 'Email is not valid';
        regMsg.style.color = 'red';
        return;
    } else {
        regEmail.classList.replace('border-error', 'border-success');
    };

    if (!isPasswordValid(regPassword.value)) {
        regPassword.classList.replace('border-success', 'border-error');
        regMsg.innerText = 'Password is not valid';
        regMsg.style.color = 'red';
        return;
    } else {
        regPassword.classList.replace('border-error', 'border-success');
    };

    if (users.some(user => user.email === regEmail.value)) {
        regPassword.classList.replace('border-success', 'border-error');
        regMsg.innerText = 'A user with same email already exists!';
        regMsg.style.color = 'red';
        return;
    } else {
        regPassword.classList.replace('border-error', 'border-success');
    };

    const userData = {
        name: regName.value,
        phoneNumber: regPhone.value,
        email: regEmail.value,
        password: regPassword.value,
    };
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    regName.value = '';
    regPhone.value = '';
    regEmail.value = '';
    regPassword.value = '';

    regMsg.innerText = 'You have successfully registered.';
    regMsg.style.color = 'green';
    setTimeout(() => regMsg.innerText = '', 5000)
    console.log('You have successfully registered.');
});