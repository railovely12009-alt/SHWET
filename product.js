// Cart Array
    let cart = [];

    // Add To Cart Function
    function addToCart(productName, productPrice){

        // Product Object
        const product = {
            name: productName,
            price: productPrice
        };

        // Add Product In Array
        cart.push(product);

        // Update Cart Count
        document.getElementById("cart-count").innerText = cart.length;

        // Save Cart In Local Storage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Success Message
        alert(productName + " Added To Cart");
    }

    // Load Old Cart Data
    window.onload = function(){

        const savedCart = localStorage.getItem("cart");

        if(savedCart){

            cart = JSON.parse(savedCart);

            document.getElementById("cart-count").innerText = cart.length;
        }
    }




