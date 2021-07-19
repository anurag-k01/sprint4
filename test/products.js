const prod = [
  {
    name: "aNURAG",
    img: "",
  },
];
if (localStorage.getItem("prod" == null)) {
  localStorage.setItem("prod"), JSON.stringify(prod);
}
function cart() {
  window.location.href = "cart.html";
}
