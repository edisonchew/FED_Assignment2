//function addToCart(itemId, itemName, itemPrice) {
    // Check if the 'cart' key exists in localStorage
    //let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    //const existingItem = cart.find(item => item.id === itemId);

    //if (existingItem) {
        // If the item is already in the cart, update the quantity
        //existingItem.quantity += 1;
    //} else {
        // If the item is not in the cart, add it
        //cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
    //}

    // Save the updated cart to localStorage
    //localStorage.setItem('cart', JSON.stringify(cart));

    // Alert the user (you can replace this with a more user-friendly notification)
    //alert('Item added to cart!');
//}

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