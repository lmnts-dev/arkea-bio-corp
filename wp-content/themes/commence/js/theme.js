let spiral = document.querySelector('.spiral-container-2 .second-spiral');
let spiral2 = document.querySelector('.spiral-container .second-spiral');
var scrollPosition = window.scrollY;
let rotateValue = "rotate(" + scrollPosition + "deg)";


 window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
   spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
  document.querySelector(".elementor-widget-ucaddon_interactive_circle_infographic.overlay .elementor-widget-container::before").style.transform = rotateValue;
 });

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





