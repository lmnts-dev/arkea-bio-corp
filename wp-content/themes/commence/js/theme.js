// document.addEventListener("DOMContentLoaded", function () {
// let strand1 = document.querySelector("#dna-strand-1");

//  window.addEventListener("scroll", () => {
//   var top = window.pageYOffset / 10;
//   strand1.style.transform = 'rotate3d(0.5, 0.5, 0.5, ' + top + 'deg)';
// });
// });

let strand1 = document.querySelector("#dna-strand-1");

 window.addEventListener("scroll", () => {
  var top = window.pageYOffset / 10;
  strand1.style.transform = 'rotate3d(0.5, 0, 0.5, ' + top + 'deg)';
});