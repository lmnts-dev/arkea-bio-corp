let spiral = document.querySelector('.spiral-container-2 .second-spiral');
let spirals = document.querySelectorAll('.spiral-container-2 .second-spiral path');
var scrollPosition = window.scrollY;
let rotateValue = "rotate(" + scrollPosition + "deg)";
let circle = document.querySelector(".circle");
var lastScrollTop = 0;
  let top2 = window.pageYOffset / 2; 

window.addEventListener("scroll", () => {
  let top1 = window.pageYOffset / 5; 
  let top2 = window.pageYOffset / 2; 
   
  // spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
  spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
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

 spirals.forEach(function (spiral, idx) {
    console.log(spiral, 'spiral here');
    if (idx % 2 === 0) {
      spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
    }
    else {
      spiral.style.transform = 'rotateZ(' - top1 + 'deg)';
    }
})



