const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


/* =========================================
   MIDDLEWARE
========================================= */

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);


/* =========================================
   LOGIN PAGE
========================================= */

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "login.html")
    );

});


app.get("/login", (req, res) => {

    res.sendFile(
        path.join(__dirname, "login.html")
    );

});


/* =========================================
   SIGNUP PAGE
========================================= */

app.get("/signup", (req, res) => {

    res.sendFile(
        path.join(__dirname, "signup.html")
    );

});


/* =========================================
   HOME PAGE
========================================= */

app.get("/home", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


/* =========================================
   PRODUCTS PAGE
========================================= */

app.get("/products", (req, res) => {

    res.sendFile(
        path.join(__dirname, "products.html")
    );

});


/* =========================================
   PRODUCT DETAILS
========================================= */

app.get("/product-details", (req, res) => {

    res.sendFile(
        path.join(__dirname, "product-details.html")
    );

});


/* =========================================
   CART PAGE
========================================= */

app.get("/cart", (req, res) => {

    res.sendFile(
        path.join(__dirname, "cart.html")
    );

});


/* =========================================
   BILLING PAGE
========================================= */

app.get("/billing", (req, res) => {

    res.sendFile(
        path.join(__dirname, "billing.html")
    );

});
/* =========================================
   ORDER SUCCESS PAGE
========================================= */

app.get("/order-success", (req, res) => {

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>SHOPIFY | Order Successful</title>

            <style>
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background: #fff5f8;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    text-align: center;
                }

                .success-box {
                    background: white;
                    padding: 50px;
                    border-radius: 20px;
                    box-shadow: 0 10px 35px rgba(0,0,0,0.1);
                    max-width: 500px;
                }

                .success-icon {
                    font-size: 60px;
                }

                h1 {
                    margin: 15px 0;
                }

                p {
                    color: #777;
                }

                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 13px 28px;
                    background: #111;
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                }
            </style>
        </head>

        <body>

            <div class="success-box">

                <div class="success-icon">✓</div>

                <h1>Order Placed Successfully!</h1>

                <p>
                    Thank you for shopping with SHOPIFY.
                </p>

                <a href="/home">
                    Continue Shopping
                </a>

            </div>

        </body>
        </html>
    `);

});

/* =========================================
   ADMIN LOGIN
========================================= */

app.get("/admin", (req, res) => {

    res.sendFile(
        path.join(__dirname, "admin.html")
    );

});


/* =========================================
   ADMIN DASHBOARD
========================================= */

app.get("/admin-dashboard", (req, res) => {

    res.sendFile(
        path.join(__dirname, "admin-dashboard.html")
    );

});


/* =========================================
   STATIC FILES
========================================= */

app.use(
    express.static(__dirname, {
        index: false
    })
);


/* =========================================
   404 PAGE
========================================= */

app.use((req, res) => {

    res.status(404).send(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>SHOPIFY | 404</title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 80px;
                    background: #fff5f8;
                }

                h1 {
                    font-size: 50px;
                }

                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 12px 25px;
                    background: #111;
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                }

            </style>

        </head>

        <body>

            <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>
                The page you are looking for does not exist.
            </p>

            <a href="/login">
                Back to Login
            </a>

        </body>

        </html>

    `);

});


/* =========================================
   START SERVER
========================================= */

app.listen(PORT, () => {

    console.log("");

    console.log(
        "=========================================="
    );

    console.log(
        "       SHOPIFY FASHION STORE"
    );

    console.log(
        "=========================================="
    );

    console.log("");

    console.log(
        "SERVER RUNNING SUCCESSFULLY"
    );

    console.log("");

    console.log(
        "LOGIN:             http://localhost:3000/"
    );

    console.log(
        "SIGNUP:            http://localhost:3000/signup"
    );

    console.log(
        "HOME:              http://localhost:3000/home"
    );

    console.log(
        "PRODUCTS:          http://localhost:3000/products"
    );

    console.log(
        "PRODUCT DETAILS:   http://localhost:3000/product-details"
    );

    console.log(
        "CART:              http://localhost:3000/cart"
    );

    console.log(
        "BILLING:           http://localhost:3000/billing"
    );

    console.log(
        "ADMIN:             http://localhost:3000/admin"
    );

    console.log(
        "ADMIN DASHBOARD:   http://localhost:3000/admin-dashboard"
    );

    console.log("");

    console.log(
        "=========================================="
    );

});