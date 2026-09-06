const products = [

    // ================= TOPS =================

    {
        id: "TOP001",
        name: "Elegant Casual Top",
        category: "tops",
        price: 899,
        oldPrice: 1199,
        image: "👚"
    },

    {
        id: "TOP002",
        name: "Floral Print Top",
        category: "tops",
        price: 799,
        oldPrice: 999,
        image: "🌸"
    },

    {
        id: "TOP003",
        name: "Classic White Top",
        category: "tops",
        price: 699,
        oldPrice: 899,
        image: "🤍"
    },

    {
        id: "TOP004",
        name: "Premium Black Top",
        category: "tops",
        price: 999,
        oldPrice: 1299,
        image: "🖤"
    },

    {
        id: "TOP005",
        name: "Summer Cotton Top",
        category: "tops",
        price: 749,
        oldPrice: 949,
        image: "🌼"
    },

    {
        id: "TOP006",
        name: "Elegant Party Top",
        category: "tops",
        price: 1099,
        oldPrice: 1399,
        image: "✨"
    },


    // ================= KURTIS =================

    {
        id: "KUR001",
        name: "Elegant Floral Kurti",
        category: "kurtis",
        price: 1199,
        oldPrice: 1499,
        image: "🌸"
    },

    {
        id: "KUR002",
        name: "Designer Cotton Kurti",
        category: "kurtis",
        price: 999,
        oldPrice: 1299,
        image: "👗"
    },

    {
        id: "KUR003",
        name: "Traditional Printed Kurti",
        category: "kurtis",
        price: 1299,
        oldPrice: 1599,
        image: "🌺"
    },

    {
        id: "KUR004",
        name: "Pastel Daily Wear Kurti",
        category: "kurtis",
        price: 899,
        oldPrice: 1199,
        image: "🌷"
    },

    {
        id: "KUR005",
        name: "Festive Embroidered Kurti",
        category: "kurtis",
        price: 1499,
        oldPrice: 1899,
        image: "✨"
    },

    {
        id: "KUR006",
        name: "Modern Straight Kurti",
        category: "kurtis",
        price: 1099,
        oldPrice: 1399,
        image: "💐"
    },


    // ================= CO-ORD SETS =================

    {
        id: "COR001",
        name: "Premium Pink Co-Ord Set",
        category: "co-ord",
        price: 1699,
        oldPrice: 2199,
        image: "🌷"
    },

    {
        id: "COR002",
        name: "Elegant Beige Co-Ord Set",
        category: "co-ord",
        price: 1799,
        oldPrice: 2299,
        image: "🤎"
    },

    {
        id: "COR003",
        name: "Summer Floral Co-Ord Set",
        category: "co-ord",
        price: 1599,
        oldPrice: 1999,
        image: "🌸"
    },

    {
        id: "COR004",
        name: "Classic Black Co-Ord Set",
        category: "co-ord",
        price: 1899,
        oldPrice: 2399,
        image: "🖤"
    },

    {
        id: "COR005",
        name: "Pastel Green Co-Ord Set",
        category: "co-ord",
        price: 1699,
        oldPrice: 2199,
        image: "🌿"
    },

    {
        id: "COR006",
        name: "Casual Cotton Co-Ord Set",
        category: "co-ord",
        price: 1499,
        oldPrice: 1899,
        image: "🌼"
    },


    // ================= DRESSES =================

    {
        id: "DRS001",
        name: "Elegant Floral Dress",
        category: "dresses",
        price: 1499,
        oldPrice: 1999,
        image: "👗",
        sale: "25% OFF"
    },

    {
        id: "DRS002",
        name: "Classic Summer Dress",
        category: "dresses",
        price: 1299,
        oldPrice: 1699,
        image: "🌸"
    },

    {
        id: "DRS003",
        name: "Elegant Party Dress",
        category: "dresses",
        price: 1399,
        oldPrice: 1799,
        image: "✨",
        sale: "22% OFF"
    },

    {
        id: "DRS004",
        name: "Pastel Midi Dress",
        category: "dresses",
        price: 1599,
        oldPrice: 1999,
        image: "🌷"
    },

    {
        id: "DRS005",
        name: "Premium Evening Dress",
        category: "dresses",
        price: 1599,
        oldPrice: 2199,
        image: "💜",
        sale: "27% OFF"
    },

    {
        id: "DRS006",
        name: "Floral Maxi Dress",
        category: "dresses",
        price: 1499,
        oldPrice: 1899,
        image: "🌺"
    },

    {
        id: "DRS007",
        name: "Chic Casual Dress",
        category: "dresses",
        price: 1399,
        oldPrice: 1899,
        image: "🌼",
        sale: "26% OFF"
    },

    {
        id: "DRS008",
        name: "Elegant White Dress",
        category: "dresses",
        price: 1699,
        oldPrice: 2099,
        image: "🤍"
    },

    {
        id: "DRS009",
        name: "Luxury Party Dress",
        category: "dresses",
        price: 1799,
        oldPrice: 2399,
        image: "💃",
        sale: "25% OFF"
    },

    {
        id: "DRS010",
        name: "Summer Floral Maxi",
        category: "dresses",
        price: 1399,
        oldPrice: 1799,
        image: "🌻"
    }

];


// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts(list) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="no-products">
                <h2>No products found</h2>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                ${
                    product.sale
                    ? `<span class="sale-badge">${product.sale}</span>`
                    : ""
                }

                <div class="product-emoji">
                    ${product.image}
                </div>

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <div class="product-price">

                    <strong>
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>

                    ${
                        product.oldPrice
                        ? `
                            <del>
                                ₹${product.oldPrice.toLocaleString("en-IN")}
                            </del>
                        `
                        : ""
                    }

                </div>


                <div class="product-actions">

                    <button
                        onclick="viewProduct('${product.id}')"
                        class="view-btn">
                        View
                    </button>

                    <button
                        onclick="addToCart('${product.id}')"
                        class="cart-btn">
                        Add to Cart
                    </button>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });

}


// ======================================
// FILTER
// ======================================

function filterProducts(category, button) {

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");


    if (category === "all") {

        displayProducts(products);

    } else {

        const filtered =
            products.filter(
                product => product.category === category
            );

        displayProducts(filtered);

    }

}


// ======================================
// SEARCH
// ======================================

function searchProducts() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const filtered =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

        );


    displayProducts(filtered);

}


// ======================================
// VIEW PRODUCT
// ======================================

function viewProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );


    window.location.href =
        "/product-details";

}


// ======================================
// ADD TO CART
// ======================================

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(
        `${product.name} added to cart!`
    );

}


// ======================================
// LOAD PRODUCTS
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProducts(products);

    }
);