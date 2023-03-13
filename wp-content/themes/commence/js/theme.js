let strand1 = document.querySelector("#dna-strand-1 img");
let strand2 = document.querySelector("#dna-strand-2 img");

let spiral = document.querySelector('.spiral img');
let spiral2 = document.querySelector('.spiral--future img');

 window.addEventListener("scroll", () => {
  let top = window.pageYOffset / 4;
  let top2 = window.pageYOffset / 2;
  strand1.style.transform = 'rotateX(' + top + 'deg)';
  strand2.style.transform = 'rotateX(' + top + 'deg)';
   
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
  spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
 });


 function animateImageOnScroll() {
  const animatedImage = document.querySelector('.spiral--future img');
  const imageContainer = document.querySelector('.spiral--future');
  const imageTop = imageContainer.getBoundingClientRect().top;

  if (imageTop < window.innerHeight) {
    animatedImage.style.animationPlayState = 'running';
  } else {
    animatedImage.style.animationPlayState = 'paused';
  }
}

window.addEventListener('scroll', animateImageOnScroll);