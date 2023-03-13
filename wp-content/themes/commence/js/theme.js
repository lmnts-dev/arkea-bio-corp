let strand1 = document.querySelector("#dna-strand-1 img");
let strand2 = document.querySelector("#dna-strand-2 img");
const imageContainer = document.querySelector('#dna-strand-1');


let spiral = document.querySelector('.spiral img');
let spiral2 = document.querySelector('.spiral--future img');

 window.addEventListener("scroll", () => {
   let top2 = window.pageYOffset / 2; 
   let scrollPos = window.scrollY;
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
   spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
  //  animatedImage.style.animationPlayState = 'running';
   
  // const translateX = scrollPos * 0.5; // adjust the speed of the slide here
  
  // strand1.style.transform = `translateX(${translateX}px)`;

 });
