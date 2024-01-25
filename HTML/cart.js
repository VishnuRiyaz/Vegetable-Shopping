function log(){
    var x=document.getElementById("lo");
    if (x.style.display=="none")
    {
    x.style.display="block";
   }
  else
{
    x.style.display="none";
}

}





let cart = [];
let total = 0;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  total += price;
  updateCart();
}


function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = `${item.name} - ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  
  cartTotal.innerText = total.toFixed(2);
}

function checkout() {
  alert(`Total: ${total.toFixed(2)}\nThank you for dining with us!`);
  cart = [];
  total = 0;
  updateCart();
}
function buy(){
    alert(`Total: ${total.toFixed(2)}\nThank you for dining with us!`);
    cart = [];
    total = 0;
    updateCart();
}