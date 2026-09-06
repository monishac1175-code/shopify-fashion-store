document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ADMIN LOGIN PROTECTION
    ========================================= */

    if (localStorage.getItem("adminLoggedIn") !== "true") {
        window.location.href = "/admin";
        return;
    }


    /* =========================================
       GET USERS
    ========================================= */

    function getUsers() {

        return JSON.parse(
            localStorage.getItem("users")
        ) || [];

    }


    /* =========================================
       GET PRODUCTS
    ========================================= */

    function getProducts() {

        return JSON.parse(
            localStorage.getItem("products")
        ) || [];

    }


    /* =========================================
       GET ORDERS
    ========================================= */

    function getOrders() {

        return JSON.parse(
            localStorage.getItem("orders")
        ) || [];

    }


    /* =========================================
       GET ALL CUSTOMER CARTS
    ========================================= */

    function getAllCarts() {

        const users = getUsers();

        let allCarts = [];

        users.forEach(function (user) {

            const cartKey =
                "cart_" + user.email;

            const cart =
                JSON.parse(
                    localStorage.getItem(cartKey)
                ) || [];

            cart.forEach(function (item) {

                allCarts.push({
                    user: user.name,
                    email: user.email,
                    product: item.name,
                    category: item.category || "",
                    price: Number(item.price) || 0,
                    quantity: Number(item.quantity) || 0,
                    total:
                        (Number(item.price) || 0) *
                        (Number(item.quantity) || 0)
                });

            });

        });

        return allCarts;

    }


    /* =========================================
       UPDATE DASHBOARD STATISTICS
    ========================================= */

    function updateStatistics() {

        const users = getUsers();
        const products = getProducts();
        const orders = getOrders();

        let totalSales = 0;
        let itemsSold = 0;

        orders.forEach(function (order) {

            totalSales += Number(order.total) || 0;

            if (Array.isArray(order.items)) {

                order.items.forEach(function (item) {

                    itemsSold +=
                        Number(item.quantity) || 0;

                });

            }

        });


        const totalUsers =
            document.getElementById("totalUsers");

        const totalProducts =
            document.getElementById("totalProducts");

        const totalOrders =
            document.getElementById("totalOrders");

        const totalSalesElement =
            document.getElementById("totalSales");

        const salesAmount =
            document.getElementById("salesAmount");

        const salesOrders =
            document.getElementById("salesOrders");

        const itemsSoldElement =
            document.getElementById("itemsSold");


        if (totalUsers) {
            totalUsers.textContent =
                users.length;
        }

        if (totalProducts) {
            totalProducts.textContent =
                products.length;
        }

        if (totalOrders) {
            totalOrders.textContent =
                orders.length;
        }

        if (totalSalesElement) {
            totalSalesElement.textContent =
                "₹" + totalSales;
        }

        if (salesAmount) {
            salesAmount.textContent =
                "₹" + totalSales;
        }

        if (salesOrders) {
            salesOrders.textContent =
                orders.length;
        }

        if (itemsSoldElement) {
            itemsSoldElement.textContent =
                itemsSold;
        }

    }


    /* =========================================
       DISPLAY USERS
    ========================================= */

    function displayUsers(searchText = "") {

        const users = getUsers();

        const tbody =
            document.getElementById(
                "usersTableBody"
            );

        if (!tbody) {
            return;
        }


        const search =
            searchText.toLowerCase().trim();


        const filteredUsers =
            users.filter(function (user) {

                const name =
                    String(user.name || "")
                        .toLowerCase();

                const email =
                    String(user.email || "")
                        .toLowerCase();

                return (
                    name.includes(search) ||
                    email.includes(search)
                );

            });


        if (filteredUsers.length === 0) {

            tbody.innerHTML = `
                <tr>
                    <td colspan="4">
                        No users found.
                    </td>
                </tr>
            `;

            return;

        }


        tbody.innerHTML = "";


        filteredUsers.forEach(
            function (user, index) {

                const row =
                    document.createElement("tr");


                row.innerHTML = `
                    <td>${index + 1}</td>

                    <td>
                        ${user.name || "—"}
                    </td>

                    <td>
                        ${user.email || "—"}
                    </td>

                    <td>
                        <span class="badge badge-success">
                            Active
                        </span>
                    </td>
                `;


                tbody.appendChild(row);

            }
        );

    }


    /* =========================================
       SEARCH USERS
    ========================================= */

    window.searchUsers = function () {

        const searchBox =
            document.getElementById(
                "userSearch"
            );

        if (!searchBox) {
            return;
        }

        displayUsers(
            searchBox.value
        );

    };


    /* =========================================
       DISPLAY PRODUCTS
    ========================================= */

    function displayProducts() {

        const products =
            getProducts();

        const tbody =
            document.getElementById(
                "productsTableBody"
            );

        if (!tbody) {
            return;
        }


        if (products.length === 0) {

            tbody.innerHTML = `
                <tr>
                    <td colspan="4">
                        No product records available.
                    </td>
                </tr>
            `;

            return;

        }


        tbody.innerHTML = "";


        products.forEach(
            function (product, index) {

                const row =
                    document.createElement("tr");


                row.innerHTML = `
                    <td>${index + 1}</td>

                    <td>
                        ${product.name || "—"}
                    </td>

                    <td>
                        ${product.category || "—"}
                    </td>

                    <td>
                        ₹${Number(product.price) || 0}
                    </td>
                `;


                tbody.appendChild(row);

            }
        );

    }


    /* =========================================
       DISPLAY CART RECORDS
    ========================================= */

    function displayCartRecords() {

        const carts =
            getAllCarts();

        const tbody =
            document.getElementById(
                "cartTableBody"
            );

        if (!tbody) {
            return;
        }


        if (carts.length === 0) {

            tbody.innerHTML = `
                <tr>
                    <td colspan="7">
                        No customer cart records available.
                    </td>
                </tr>
            `;

            return;

        }


        tbody.innerHTML = "";


        carts.forEach(
            function (item, index) {

                const row =
                    document.createElement("tr");


                row.innerHTML = `
                    <td>${index + 1}</td>

                    <td>
                        ${item.user || "—"}
                    </td>

                    <td>
                        ${item.email || "—"}
                    </td>

                    <td>
                        ${item.product || "—"}
                    </td>

                    <td>
                        ${item.quantity}
                    </td>

                    <td>
                        ₹${item.total}
                    </td>

                    <td>
                        <span class="badge badge-pending">
                            In Cart
                        </span>
                    </td>
                `;


                tbody.appendChild(row);

            }
        );

    }


    /* =========================================
       DISPLAY ORDERS
    ========================================= */

    function displayOrders() {

        const orders =
            getOrders();

        const tbody =
            document.getElementById(
                "ordersTableBody"
            );

        if (!tbody) {
            return;
        }


        if (orders.length === 0) {

            tbody.innerHTML = `
                <tr>
                    <td colspan="6">
                        No orders yet.
                    </td>
                </tr>
            `;

            return;

        }


        tbody.innerHTML = "";


        orders.forEach(function (order) {

            const row =
                document.createElement("tr");


            row.innerHTML = `
                <td>
                    ${order.orderId || "—"}
                </td>

                <td>
                    ${order.customerName || "—"}
                </td>

                <td>
                    ${order.email || "—"}
                </td>

                <td>
                    ₹${Number(order.total) || 0}
                </td>

                <td>
                    ${order.payment || "—"}
                </td>

                <td>
                    <span class="badge badge-success">
                        ${order.status || "Placed"}
                    </span>
                </td>
            `;


            tbody.appendChild(row);

        });

    }


    /* =========================================
       SECTION NAVIGATION
    ========================================= */

    window.showSection = function (sectionName) {

        const sections =
            document.querySelectorAll(
                ".admin-section"
            );


        sections.forEach(function (section) {

            section.classList.remove("active");

        });


        const selectedSection =
            document.getElementById(
                sectionName
            );


        if (selectedSection) {

            selectedSection.classList.add(
                "active"
            );

        }


        const buttons =
            document.querySelectorAll(
                ".sidebar button"
            );


        buttons.forEach(function (button) {

            button.classList.remove("active");

        });


        const activeButton =
            document.querySelector(
                `[data-section="${sectionName}"]`
            );


        if (activeButton) {

            activeButton.classList.add("active");

        }

    };


    /* =========================================
       ADMIN LOGOUT
    ========================================= */

    window.adminLogout = function () {

        localStorage.removeItem(
            "adminLoggedIn"
        );

        window.location.href =
            "/admin";

    };


    /* =========================================
       LOAD DASHBOARD
    ========================================= */

    updateStatistics();

    displayUsers();

    displayProducts();

    displayCartRecords();

    displayOrders();

});

        