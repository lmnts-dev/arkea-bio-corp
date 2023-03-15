let spiral = document.querySelector('.spiral img');
let spiral2 = document.querySelector('.spiral-2 img');

 window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
  spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
 });

let graphic = document.querySelectorAll('.uc-circle');
let active = document.querySelector('.uc-circle-selected');
let interactiveContainer = document.querySelector('.ciclegraph .innerCircle');

if (active == null) { 
  interactiveContainer.style.backgroundColor = 'transparent';
  interactiveContainer.style.alignItems = 'center!important';
  interactiveContainer.style.textAlign = 'center!important';
}

graphic.forEach(el => el.click(
  interactiveContainer.style.backgroundColor = 'var(--e-global-color-accent )'
));

