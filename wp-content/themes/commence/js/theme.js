let strand1 = document.querySelector("#dna-strand-1 img");
let strand2 = document.querySelector("#dna-strand-2 img");

let spiral = document.querySelector('.spiral img');
let spiral2 = document.querySelector('.spiral--future img');

 window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
  spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
 });


 function animateImageOnScroll() {
   const imageContainer = document.querySelector('#dna-strand-1');
  const animatedImage = document.querySelector('#dna-strand-1 img');
  const imageTop = imageContainer.getBoundingClientRect().top;

  if (imageTop < window.innerHeight) {
    animatedImage.style.animationPlayState = 'running';
  } else {
    animatedImage.style.animationPlayState = 'paused';
  }
}

window.addEventListener('scroll', animateImageOnScroll);