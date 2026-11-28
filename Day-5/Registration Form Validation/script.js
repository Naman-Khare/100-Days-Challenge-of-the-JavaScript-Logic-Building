let registerForm = document.getElementById("registerForm");
let iName = document.getElementById("name");
let iEmail = document.getElementById("email");
let iPassword = document.getElementById("password");
let message = document.getElementById("message");

function validateName(name) {
    if (name.trim() === "") {
        return false;
    } else {
        return true;
    }
}

function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

function validatePassword(password) {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    let name = iName.value;
    let email = iEmail.value;
    let password = iPassword.value;

    if (!validateName(name)) {
        message.textContent = "Error! Please enter your name!";
        return;
    }
    if (!validateEmail(email)) {
        message.textContent = "Error! Please enter a valid email!";
        return;
    }
    if (!validatePassword(password)) {
        message.textContent = "Error! Password must be at least 8 characters!";
        return;
    }
    message.textContent = "Registration Successful!";
}

registerForm.addEventListener("submit", handleSubmit);