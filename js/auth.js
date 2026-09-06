document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LOGIN
    ===================================================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput =
                document.getElementById("email");

            const passwordInput =
                document.getElementById("password");

            const email =
                emailInput.value.trim().toLowerCase();

            const password =
                passwordInput.value.trim();


            /* CHECK EMPTY FIELDS */

            if (email === "" || password === "") {

                alert("Please enter your email and password.");

                return;
            }


            /* GET REGISTERED USERS */

            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];


            /* FIND USER */

            const user =
                users.find(function (item) {

                    return (
                        item.email === email &&
                        item.password === password
                    );

                });


            /* INVALID LOGIN */

            if (!user) {

                alert(
                    "Invalid email or password."
                );

                return;
            }


            /* LOGIN SUCCESS */

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );

            localStorage.setItem(
                "currentUser",
                user.email
            );

            localStorage.setItem(
                "userName",
                user.name
            );


            /* CREATE USER CART IF IT DOES NOT EXIST */

            const cartKey =
                "cart_" + user.email;

            if (
                !localStorage.getItem(cartKey)
            ) {

                localStorage.setItem(
                    cartKey,
                    JSON.stringify([])
                );

            }


            alert(
                "Login successful! Welcome " +
                user.name + "!"
            );


            /* GO TO HOME */

            window.location.href = "/index.html";

        });

    }



    /* =====================================================
       SIGNUP
    ===================================================== */

    const signupForm =
        document.getElementById("signupForm");


    if (signupForm) {

        signupForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* GET FORM VALUES */

                const name =
                    document
                    .getElementById("name")
                    .value
                    .trim();


                const email =
                    document
                    .getElementById("email")
                    .value
                    .trim()
                    .toLowerCase();


                const password =
                    document
                    .getElementById("password")
                    .value
                    .trim();


                const confirmPassword =
                    document
                    .getElementById("confirmPassword")
                    .value
                    .trim();


                const terms =
                    document
                    .getElementById("terms")
                    .checked;



                /* EMPTY FIELD CHECK */

                if (
                    name === "" ||
                    email === "" ||
                    password === "" ||
                    confirmPassword === ""
                ) {

                    alert(
                        "Please fill all fields."
                    );

                    return;
                }



                /* TERMS CHECK */

                if (!terms) {

                    alert(
                        "Please agree to the terms and conditions."
                    );

                    return;
                }



                /* PASSWORD LENGTH */

                if (password.length < 6) {

                    alert(
                        "Password must contain at least 6 characters."
                    );

                    return;
                }



                /* PASSWORD MATCH */

                if (
                    password !== confirmPassword
                ) {

                    alert(
                        "Passwords do not match."
                    );

                    return;
                }



                /* GET USERS */

                let users =
                    JSON.parse(
                        localStorage.getItem("users")
                    ) || [];



                /* CHECK EXISTING EMAIL */

                const existingUser =
                    users.find(function (user) {

                        return (
                            user.email === email
                        );

                    });


                if (existingUser) {

                    alert(
                        "An account with this email already exists."
                    );

                    return;
                }



                /* CREATE NEW USER */

                const newUser = {

                    name: name,

                    email: email,

                    password: password

                };



                /* ADD USER */

                users.push(newUser);



                /* SAVE USERS */

                localStorage.setItem(
                    "users",
                    JSON.stringify(users)
                );



                /* CREATE SEPARATE CART FOR USER */

                const cartKey =
                    "cart_" + email;


                localStorage.setItem(
                    cartKey,
                    JSON.stringify([])
                );



                /* SUCCESS */

                alert(
                    "Account created successfully!"
                );



                /* GO TO LOGIN */

                window.location.href =
                    "login.html";

            }
        );

    }

});
