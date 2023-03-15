let spiral = document.querySelector('.spiral img');
let spiral2 = document.querySelector('.spiral-2 img');

 window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
  spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
 });

let active = document.querySelector('.uc-circle-selected');
let interactiveContainer = document.querySelector('.ciclegraph .innerCircle');

if (active == null) { 
  interactiveContainer.style.backgroundColor = 'transparent';
  interactiveContainer.style.alignItems = 'center!important';
  interactiveContainer.style.textAlign = 'center!important';
}

window.addEventListener("click", () => {
  interactiveContainer.style.backgroundColor = 'var(--e-global-color-accent )';
  title.style.alignItems = 'start!important'
})

