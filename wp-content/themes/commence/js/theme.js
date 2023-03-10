let strand1 = document.querySelector("#dna-strand-1");
let strand2 = document.querySelector("#dna-strand-2");


 window.addEventListener("scroll", () => {
   let top = window.pageYOffset / 10;
   strand1.style.transform = 'rotateX(' + top + 'deg)';
   strand2.style.transform = 'rotateX(' + top + 'deg)';
});