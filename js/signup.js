// User SignUp email validation start

let email_signup = document.getElementById("inputEmail4");
let email_error = document.getElementById("error_email");

email_signup.addEventListener("blur", function () {
    const emailpattern = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/;

    if (emailpattern.test(email_signup.value)) {
        email_error.innerHTML = "Email is Valid!!!";
        email_error.style.color = "green";
    } else if (email_signup.value == "") {
        email_error.innerHTML = "Fields Cannot be Empty";
        email_error.style.color = "red";
    } else {
        email_error.innerHTML = "Email is InValid!!!";
        email_error.style.color = "red";
    }
});

// User Signup email validation end


// User Signup password validation start

let passwd = document.getElementById("inputPassword4");
let passwd_error = document.getElementById("passwd_error");
let strength_signup = document.getElementById("strength_signup");

passwd.addEventListener("input", function () {
    const passwdpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwdpattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwdpattern.test(passwd.value)) {
        passwd_error.innerHTML = "Password Valid!!!";
        passwd_error.style.color = "green";
        strength_signup.innerHTML = "Medium";
        strength_signup.style.color = "orange";
    } else if (passwdpattern2.test(passwd.value)) {
        passwd_error.innerHTML = "Password Valid!!!";
        passwd_error.style.color = "green";
        strength_signup.innerHTML = "Strong";
        strength_signup.style.color = "green";
    } else if (passwd.value == "") {
        passwd_error.innerHTML = "Fields Cannot be Empty!!";
        passwd_error.style.color = "red";
        strength_signup.innerHTML = null;
    } else {
        passwd_error.innerHTML = "Password invalid";
        passwd_error.style.color = "red";
        strength_signup.innerHTML = "Poor";
        strength_signup.style.color = "red";
    }
});


// User Signup password validation end

// User signup Phone number validation start

let num_signup = document.getElementById("inputPhonenumber");
let signup_error = document.getElementById("number_error");

num_signup.addEventListener("input", function () {
    const signup_pattern_1 = /^\d{10}$/;
    const signup_pattern_2 = /^[1-9]\d{2}[-][1-9]\d{2}[-]\d{4}$/;
    const signup_pattern_3 = /^[1-9]\d{2}\.\d{3}\.\d{4}$/;
    const signup_pattern_4 = /^[1-9]\d{2}\s\d{3}\s\d{4}$/;

    if (signup_pattern_1.test(num_signup.value) || signup_pattern_2.test(num_signup.value) || signup_pattern_3.test(num_signup.value) || signup_pattern_4.test(num_signup.value)) {
        signup_error.innerHTML = "Phone Number Valid!!!";
        signup_error.style.color = "green";
    } else if (num_signup.value == "") {
        signup_error.innerHTML = "Fields cannot be empty!!!";
        signup_error.style.color = "red";
    } else {
        signup_error.innerHTML = "Phone Number Invalid!!!";
        signup_error.style.color = "red";
    }
});

// User signup Phone number validation end