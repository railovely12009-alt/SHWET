
    // Cart Count Variable
    let cartCount = 0;

    // Select all buttons
    const cartButtons = document.querySelectorAll(".add-cart");

    // Select cart count span
    const cartCounter = document.getElementById("cart-count");

    // Add click event on every button
    cartButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Increase count
            cartCount++;

            // Update navbar cart count
            cartCounter.textContent = cartCount;

            // Alert message
            alert("Product Added To Cart");

        });

    });

    