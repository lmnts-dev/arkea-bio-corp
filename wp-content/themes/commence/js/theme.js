let spiral = document.querySelector('.spiral img');
let spiral2 = document.querySelector('.second-spiral img');

 window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
  spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
 });

let graphic = document.querySelectorAll('.uc-circle');
let active = document.querySelector('.uc-circle-selected');
let interactiveContainer = document.querySelector('.ciclegraph .innerCircle');
let infoBtns = document.querySelector('interactive-btns');


if (active == null) { 
  interactiveContainer.style.backgroundColor = 'transparent';
  infoBtns.style.display = 'block';
}

graphic.forEach(el => el.addEventListener('click', () => {
  interactiveContainer.style.backgroundColor = 'var(--e-global-color-accent )';
}));





