// Retrieve the cart items from local storage
var cartItems = JSON.parse(localStorage.getItem('cartItems'));

// Display the product details, total price, and today's date
var productDetailsElement = document.getElementById('productDetails');
var totalPriceElement = document.getElementById('totalPrice');
var todaysDateElement = document.getElementById('todaysDate');

// Calculate the total price
var totalPrice = 0;

cartItems.forEach(function (item) {
  var productDiv = document.createElement('div');
  productDiv.classList.add('product');

  var productImage = document.createElement('img');
  productImage.src = item.image;
  productImage.alt = item.name;
  productDiv.appendChild(productImage);

  var productName = document.createElement('h2');
  productName.textContent = item.name;
  productDiv.appendChild(productName);

  var productId = document.createElement('p');
  productId.textContent = 'Product ID: ' + item.productId;
  productDiv.appendChild(productId);

  var productCategory = document.createElement('p');
  productCategory.textContent = 'Category: ' + item.category;
  productDiv.appendChild(productCategory);

  var productPrice = document.createElement('p');
  productPrice.textContent = 'Price: INR ' + item.price;
  productDiv.appendChild(productPrice);

  var productQuantity = document.createElement('p');
  productQuantity.textContent = 'Quantity: ' + item.quantity;
  productDiv.appendChild(productQuantity);

  productDetailsElement.appendChild(productDiv);

  var itemPrice = parseInt(item.price) * item.quantity;
  totalPrice += itemPrice;
});

totalPriceElement.textContent = 'Total Price: INR ' + totalPrice;

var currentDate = new Date();
var today = currentDate.toLocaleDateString();
todaysDateElement.textContent = "Today's Date: " + today;

// Payment button event listener
var paymentButton = document.getElementById('paymentButton');
paymentButton.addEventListener('click', function () {
  // Process the payment and complete the checkout process
  // You can add your payment processing logic here

  // Display a success message or redirect to a success page
  alert('Payment Successful!');
  window.location.href = 'success.html'; // Replace with your success page URL
});

// Clear Cart button event listener
var clearCartButton = document.getElementById('clearCartButton');
clearCartButton.addEventListener('click', function () {
  // Clear the cart items from local storage
  localStorage.removeItem('cartItems');
  alert('Cart cleared successfully!');
  window.location.reload(); // Refresh the page to reflect the empty cart
});
