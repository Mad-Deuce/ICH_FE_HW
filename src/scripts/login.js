const authForm = document.querySelector(".auth-form");
const loginEmail = document.querySelector(".login-email");
const loginPassword = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-btn");
const loginMsg = document.querySelector(".login-msg");

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const users = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];

    if (
        loginEmail.value === "" ||
        loginPassword.value === ""
    ) {
        loginMsg.innerText = "All fields are required";
        loginMsg.style.color = "red";
        return;
    };

    if (!users.some(user => user.email === loginEmail.value && user.password === loginPassword.value)) {
        loginMsg.innerText = "You entered an incorrect email or password.";
        loginMsg.style.color = "red";
        return;
    };

    loginEmail.value = "";
    loginPassword.value = "";
    loginMsg.innerText = "You have successfully entered.";
    loginMsg.style.color = "green";


    authForm.style.display = 'none';
    const btnLogout = document.createElement("button");
    btnLogout.innerText = "Logout";
    btnLogout.classList.add('btn');
    document.body.append(btnLogout);

    btnLogout.addEventListener('click', () => {
        document.body.removeChild(btnLogout);
        authForm.style.display = 'block'; 
        loginMsg.innerText = "";
    });

    console.log("You have successfully entered.");
});