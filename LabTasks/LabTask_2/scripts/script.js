document.addEventListener("DOMContentLoaded", () => {
    const Name = document.getElementById("Username");
    const Form = document.getElementById("Sign_up_form");
    const Email = document.getElementById("Email");
    const phonenumber = document.getElementById("number");
    const Password = document.getElementById("password");
    const Conferm_Password = document.getElementById("conferm-pasword");

    const Error_username = document.getElementById("error-message-Username");
    const Error_email = document.getElementById("error-message-Email");
    const Error_number = document.getElementById("error-message-Number");
    const Error_password = document.getElementById("error-message-Password");
    const Error_conferm_password = document.getElementById("error-message-Cp");

    Form.addEventListener("submit", function (Event) {
        let flag = true;


        Error_username.classList.add("d-none");
        Error_username.classList.remove("d-block");
        Error_username.textContent = "";

        Error_email.classList.add("d-none");
        Error_email.classList.remove("d-block");
        Error_email.textContent = "";

        Error_number.classList.add("d-none");
        Error_number.classList.remove("d-block");
        Error_number.textContent = "";

        Error_password.classList.add("d-none");
        Error_password.classList.remove("d-block");
        Error_password.textContent = "";

        Error_conferm_password.classList.add("d-none");
        Error_conferm_password.classList.remove("d-block");
        Error_conferm_password.textContent = "";


        const invalidChars = /[#\s!]/;
        if (invalidChars.test(Name.value)) {
            flag = false;
            Error_username.textContent = "* Username cannot contain spaces or special characters (!, #, etc.)";
            Error_username.classList.remove("d-none");
            Error_username.classList.add("d-block");
        };
        if (Name.value === "") {
            Error_username.textContent = "";
            Error_username.textContent = "* UserName Required";
            Error_username.classList.remove("d-none");
            Error_username.classList.add("d-block");
            flag = false;
        };
        if (Email.value === "") {
            Error_email.textContent = "";
            Error_email.textContent = "* Email Required";
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
        const invalidNumber = /^(03)\d{9}/;
        if (phonenumber.value === "") {
            Error_number.textContent = "* Number Required";
            Error_number.classList.remove("d-none")
            Error_number.classList.add("d-block");
            flag = false;
        }
        else if (!invalidNumber.test(phonenumber.value)) {
            Error_number.textContent = "* Invalid PhoneNumber";
            Error_number.classList.remove("d-none")
            Error_number.classList.add("d-block");
            flag = false;
        };
        const password_char = /[@#$%^&*!A-Z]\w{8,}/;
        if (Password.value === "") {
            Error_password.textContent = "* Password Required";
            Error_password.classList.remove("d-none")
            Error_password.classList.add("d-block");
            flag = false;
        }
        else if (!password_char.test(Password.value)) {
            Error_password.textContent = "* Password Require Special Character or Uppercase letter and altealst 8 Characters";
            Error_password.classList.remove("d-none")
            Error_password.classList.add("d-block");
            flag = false;
        };
        if(Conferm_Password.value===""){
            Error_conferm_password.textContent = "* Please Conferm Password";
            Error_conferm_password.classList.remove("d-none")
            Error_conferm_password.classList.add("d-block");
            flag = false;

        }
        else if (!(Password.value==Conferm_Password.value)) {
            Error_conferm_password.textContent = "* PLease Conferm Again ";
            Error_conferm_password.classList.remove("d-none")
            Error_conferm_password.classList.add("d-block");
            flag = false;
        };
        if (!flag) {
            Event.preventDefault();
        };
    });
});