let spirals = document.querySelectorAll('.spiral-container-2 .second-spiral path');
let spirals2 = document.querySelectorAll('.spiral-container .second-spiral path');

var scrollPosition = window.scrollY;
let rotateValue = "rotate(" + scrollPosition + "deg)";
let circle = document.querySelector(".circle");
var lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
  circle.style.transform = 'rotateZ(' + top2 / 30 + 'deg)';
 });


 // INTERACTIVE GRAPHIC

let graphic = document.querySelectorAll('.uc-circle');
let active = document.querySelector('.uc-circle-selected');
let interactiveContainer = document.querySelector('.ciclegraph .innerCircle');
let infoBtns = document.querySelector('.interactive-btns');
let ineractiveDiv = document.querySelector('.elementor-widget-ucaddon_interactive_circle_infographic');
let container = document.querySelector('.elementor-widget-ucaddon_interactive_circle_infographic .elementor-widget-container');
let close = document.querySelector('#graphic-close');


if (active == null) { 
  interactiveContainer.style.backgroundColor = 'transparent';
}

graphic.forEach(el => el.addEventListener('click', () => {
  interactiveContainer.style.backgroundColor = 'var(--e-global-color-accent )';
  infoBtns.style.display = 'block';
  ineractiveDiv.classList.add('overlay');
  interactiveContainer.style.display = 'block';
  interactiveContainer.style.alignItems = 'start';
  interactiveContainer.style.textAlign = 'start';
  close.style.display = 'block';
}));

close.addEventListener("click", () => {
  console.log('clicked');
  interactiveContainer.style.display = 'none';
  infoBtns.style.display = 'none';
  close.style.display = 'none';
  ineractiveDiv.classList.remove('overlay');

})

//SPIRALS ANIMATIONS

let newSpirals = Array.from(spirals);
let newSpirals2 = Array.from(spirals2);

window.addEventListener("scroll", () => {
  let top3 = window.pageYOffset / 2;
  let top5 = (window.pageYOffset / 3)  * -1; 
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
  })

  newSpirals2.map((newSpiral, idx) => {
    if (idx % 2 === 0) {
      newSpiral.style.transform = 'rotate(' + top3 + 'deg)';
    }
    else if (idx % 3 == 0) {
      newSpiral.style.transform = 'rotate(' + top4 + 'deg)';
    }
    else if (idx % 5 == 0) {
      newSpiral.style.transform = 'rotate(' + top5 + 'deg)';
    }
    else {
      newSpiral.style.transform = 'rotate(' + top6 + 'deg)';
    }
  });

});

//FOR STYLING CHECKED BUTTONS IN ELEMENTOR FORM

let form = document.querySelector( ".frm_pro_form" );

form.addEventListener( "change", ( evt ) => {
  let trg = evt.target,
      trg_par = trg.parentElement;
  
  if ( trg.type === "radio" && trg_par &&
       trg_par.tagName.toLowerCase() === "label" ) {
    
    let prior = form.querySelector( 'label.checked input[name="' +
                                    trg.name + '"]' );
    
    if ( prior ) {
      prior.parentElement.classList.remove( "checked" );
    }
    
    trg_par.classList.add( "checked" );
    
  }
}, false );




