let spirals = document.querySelectorAll('.spiral-container-2 .second-spiral path');
let spirals2 = document.querySelectorAll('.spiral-container-2 .second-spiral path');

var scrollPosition = window.scrollY;
let rotateValue = "rotate(" + scrollPosition + "deg)";
let circle = document.querySelector(".circle");
var lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
   
  // spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop) {
    circle.style.transform = 'rotateZ(' + top2 + 'deg)';
  } 
 });


 // INTERACTIVE GRAPHIC

let graphic = document.querySelectorAll('.uc-circle');
let active = document.querySelector('.uc-circle-selected');
let interactiveContainer = document.querySelector('.ciclegraph .innerCircle');
let infoBtns = document.querySelector('.interactive-btns');
let ineractiveDiv = document.querySelector('.elementor-widget-ucaddon_interactive_circle_infographic');



if (active == null) { 
  interactiveContainer.style.backgroundColor = 'transparent';
}

graphic.forEach(el => el.addEventListener('click', () => {
  interactiveContainer.style.backgroundColor = 'var(--e-global-color-accent )';
  infoBtns.style.display = 'block';
  ineractiveDiv.classList.add('overlay');
  interactiveContainer.style.alignItems = 'start';
  interactiveContainer.style.textAlign = 'start';
}));

//SPIRALS ANIMATIONS

let newSpirals = Array.from(spirals);
let newSpirals2 = Array.from(spirals2);

window.addEventListener("scroll", () => {
  let top3 = window.pageYOffset / 2;
  let top5 = window.pageYOffset / 3; 
  let top4 = (window.pageYOffset / 4) * -1; 
  let top6 = window.pageYOffset / 5; 

  newSpirals.map((spiral, idx) => {
    if (idx % 2 === 0) {
      spiral.style.transform = 'rotate(' + top3 + 'deg)';
    }
    else if (idx % 3 == 0) {
      spiral.style.transform = 'rotate(' + top4 + 'deg)';
    }
    else if (idx % 5 == 0) {
      spiral.style.transform = 'rotate(' + top5 + 'deg)';
    }
    else {
      spiral.style.transform = 'rotate(' + top6 + 'deg)';
    }
  });

});

console.log('newspirals', newSpirals2);
  
window.addEventListener("scroll", () => {
  let top3 = window.pageYOffset / 2;
  let top5 = window.pageYOffset / 3; 
  let top4 = (window.pageYOffset / 4) * -1; 
  let top6 = window.pageYOffset / 5; 

  newSpirals2.map((spiral, idx) => {
    if (idx % 2 === 0) {
      spiral.style.transform = 'rotate(' + top3 + 'deg)';
    }
    else if (idx % 3 == 0) {
      spiral.style.transform = 'rotate(' + top4 + 'deg)';
    }
    else if (idx % 5 == 0) {
      spiral.style.transform = 'rotate(' + top5 + 'deg)';
    }
    else {
      spiral.style.transform = 'rotate(' + top6 + 'deg)';
    }
  });

  });





