let btnSubmit = document.getElementById('btnSubmit');
let details = "";

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  details += `Cardholder's Name: ${name}<br/>`;

  let number = document.getElementById("number").value;
  details += `Card Number: ${number}<br/>`;

  let expiry = document.getElementById("expire").value;
  details += `Expiration Date: ${expiry}<br/>`;

  let cvv = document.getElementById("cvv").value;
  details += `CVV Number: ${cvv}<br/>`;

  document.getElementById("balance").innerHTML = `Card Balance: $2,567.55<br/>`;

  document.getElementById("deduct").innerHTML = `$33.96 Deducted From Card<br/>`;

  document.getElementById("remain").innerHTML = `Remaining Balance: $2,533.59<br/>`;

  document.getElementById("message").innerHTML = `Thank You, Come Again!`;

  document.getElementById("cardDetails").innerHTML = details;
});