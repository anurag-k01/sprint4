// console.log("hello world");
let form = document.getElementById("address");
let house = form.HouseNo.value;
let line1 = form.Line1.value;
let city = form.city.value;
let state = form.state.value;
let pin = form.pin.value;

function submit() {
  window.location.href = "payment.html";
}
