let strand1 = document.querySelector("#dna-strand-1 img");
let strand2 = document.querySelector("#dna-strand-2 img");

let spiral = document.querySelector('.spiral img');

 window.addEventListener("scroll", () => {
  let top = window.pageYOffset / 10;
  let top2 = window.pageYOffset / 10;
  strand1.style.transform = 'rotateX(' + top + 'deg)';
  strand2.style.transform = 'rotateX(' + top2 + 'deg)';
   
  spiral.style.transform = 'rotateZ(' + top + 'deg)';
});