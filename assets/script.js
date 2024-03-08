const addressbtn = document.querySelector('#address-form');
const addressclose = document.querySelector('#address-close');
addressbtn.addEventListener("click", function () {
  document.querySelector('.address-form').style.display = "flex";
});
addressclose.addEventListener("click", function () {
  document.querySelector('.address-form').style.display = "none";
});
// slider
const rightarrow = document.querySelector('.fa-solid fa-chevron-right');
rightarrow.addEventListener("click", function () {
  console.log("ok");
  document.querySelector(".slider-contend-left-top");
});
