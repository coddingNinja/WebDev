document.addEventListener("DOMContentLoaded", () => {
    const Name = document.getElementById("Username");
    const Form = document.getElementById("Sign_up_form");
    const Email = document.getElementById("Email");
    const number = document.getElementById("number");
    const Password = document.getElementById("password");
    const Conferm_Password = document.getElementById("conferm-pasword");


    Form.addEventListener("submit", function (Event) {
        let flag = true;
        const Error_username = document.getElementById("error-message-Username");
        const Error_email = document.getElementById("error-message-Email");
        // const Error_number = document.getElementById("error-message-Number");
        // const Error_password = document.getElementById("error-message-Password");
        // const Error_conferm_password = document.getElementById("error-message-cp");

        Error_username.classList.add("d-none");
        Error_username.classList.remove("d-block");
        Error_username.textContent = "asdasd";

        Error_email.classList.add("d-none");
        Error_email.classList.remove("d-block");
        Error_email.textContent = "";

        // Error_number.classList.add("d-none");
        // Error_number.classList.remove("d-block");
        // Error_number.textContent = "";

        // Error_password.classList.add("d-none");
        // Error_password.classList.remove("d-block");
        // Error_password.textContent = "";

        // Error_conferm_password.classList.add("d-none");
        // Error_conferm_password.classList.remove("d-block");
        // Error_conferm_password.textContent = "";


        const invalidChars = /[#\s!]/;
        if (invalidChars.test(Name.value)) {
            flag = false;
            Error_username.textContent = "* Username cannot contain spaces or special characters (!, #, etc.)";
            Error_username.classList.remove("d-none");
            Error_username.classList.add("d-block");
        };
        if (Name.value===""){
            Error_username.textContent="";
            Error_username.textContent = "* UserName Is Required";
            Error_username.classList.remove("d-none");
            Error_username.classList.add("d-block");
            flag = false;
        };
        if (Email.value===""){
            Error_email.textContent="";
            Error_email.textContent = "* Email Is Required";
            Error_email.classList.remove("d-none");
            Error_email.classList.add("d-block");
            flag = false;
        }
        else if (!Email.value.endsWith("@gmail.com")) {
            flag = false;
            Error_email.textContent = "* Invalid Email";
            Error_email.classList.remove("d-none");
            Error_email.classList.add("d-block");
        };

        if (!flag) {
            Event.preventDefault();
        };
    });
});