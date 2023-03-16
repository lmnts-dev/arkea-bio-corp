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
  interactiveContainer.style.alignItems = 'center';
  interactiveContainer.style.textAlign = 'center';
}

graphic.forEach(el => el.addEventListener('click', () => {
  interactiveContainer.style.backgroundColor = 'var(--e-global-color-accent )';
}));


let navToggle = document.querySelector('elementor-menu-toggle.elementor-active');
let toggle = document.querySelector('elementor-menu-toggle');
let mobileNav = document.querySelector('mobile-nav--sticky');

toggle.addEventListener("click", () => {
  console.log('clicked');
  if (navToggle != null) {
    console.log('should work');
    mobileNav.style.background = 'var(--e-global-color-a741065)!important';
  }
})



