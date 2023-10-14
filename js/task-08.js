const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const email = loginForm.elements.email;
    const password = loginForm.elements.password;

    if (email.value === "" || password.value === "") {
        alert("All fields must be completed");
    } else {
        const userData = {
            email: email.value,
            password: password.value,
        };

        console.log(userData);
        loginForm.reset();
    }
});