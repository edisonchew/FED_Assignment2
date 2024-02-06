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







