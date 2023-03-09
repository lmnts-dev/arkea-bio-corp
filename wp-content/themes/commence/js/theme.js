document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".mobile-nav--sticky");
  console.log(nav, 'nav here');
  if (window.scrollY == 0) {
    console.log('works');
    nav.classList.toggle('color');
  }
});