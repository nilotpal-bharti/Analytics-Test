function generateProductDivisions() {
    var productContainer = document.getElementById('productContainer');
  
    // Fetch the product data from an external JSON file
    fetch('products.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
        // Loop through products array and create product divisions
        products.forEach(function (product, index) {
          var productDivision = document.createElement('div');
          productDivision.classList.add('product'); // Add a CSS class for styling
  
          var productName = document.createElement('h2');
          productName.textContent = product.name;
  
          var productCategory = document.createElement('p');
          productCategory.textContent = 'Category: ' + product.category;
  
          var productPrice = document.createElement('p');
          productPrice.textContent = 'Price: INR ' + product.price;
  
          var productCountLabel = document.createElement('label');
          productCountLabel.textContent = 'Quantity: ';
  
          var productCountInput = document.createElement('input');
          productCountInput.type = 'number';
          productCountInput.value = product.quantity;
          productCountInput.min = '0';
  
          var productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.name;
  
          // Attach click event listener to add the product to the cart and redirect to checkout page
          var addToCartButton = document.createElement('button');
          addToCartButton.textContent = 'Add to Cart';
          addToCartButton.addEventListener('click', function () {
            var selectedQuantity = parseInt(productCountInput.value);
            addToCart(product, selectedQuantity);
          });
  
          productDivision.appendChild(productName);
          productDivision.appendChild(productCategory);
          productDivision.appendChild(productPrice);
          productDivision.appendChild(productCountLabel);
          productDivision.appendChild(productCountInput);
          productDivision.appendChild(productImage);
          productDivision.appendChild(addToCartButton);
  
          productContainer.appendChild(productDivision);
        });
      })
      .catch(function (error) {
        console.log('Error fetching product data:', error);
      });
  }
  
  // Function to add product to cart and redirect to checkout page
  // Function to add product to cart and redirect to checkout page
function addToCart(product, quantity) {
    // Retrieve the existing cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Check if the product is already in the cart
    var existingCartItemIndex = cartItems.findIndex(function (item) {
      return item.productId === product.productId;
    });
  
    if (existingCartItemIndex !== -1) {
      // Update the quantity of the existing product in the cart
      cartItems[existingCartItemIndex].quantity += quantity;
    } else {
      // Add the selected product to the cart
      var cartItem = {
        productId: product.productId,
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: quantity,
        image: product.image
      };
  
      cartItems.push(cartItem);
    }
  
    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Show a confirmation message
    alert('Product added to cart successfully!');
  
    // Redirect to the checkout page
    window.location.href = 'checkout.html';
  }
  
  
  // Call the function to generate product divisions
  generateProductDivisions();
  