let btnSubmit = document.getElementById('btnSubmit');
let fdbk = "";

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  let assess = document.getElementById("assess").value;
  fdbk += `User-Friendliness & Product Finding: <br/>
  ${assess}<br/><br/>`;

  let express = document.getElementById("express").value;
  fdbk += `R&R (Return & Refund) Processes: <br/>
  ${express}<br/><br/>`;

  let comments = document.getElementById("comments").value;
  fdbk += `Additional Comments: <br/>
  ${comments}<br/>`;

  document.getElementById("details").innerHTML = fdbk;

});




function addToCart(itemId, itemName, itemPrice, itemImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const quantity = document.getElementById(`quantity_${itemId}`).valueAsNumber;

    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: quantity, image: itemImage });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}