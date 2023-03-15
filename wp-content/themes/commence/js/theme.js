let spiral = document.querySelector('.spiral img');
let spiral2 = document.querySelector('.spiral-2 img');

 window.addEventListener("scroll", () => {
  let top2 = window.pageYOffset / 2; 
  spiral.style.transform = 'rotateZ(' + top2 + 'deg)';
  spiral2.style.transform = 'rotateZ(' + top2 + 'deg)';
 });


 const container = document.querySelector('.ciclegraph .uc-items-wrapper');

// Get a reference to the active item
const activeItem = document.querySelector('.uc-circle.uc-circle-selected');

// Calculate the rotation angle needed to move the active item to the top
const angle = -1 * (360 / container.children.length) * Array.from(container.children).indexOf(activeItem);

// Apply the necessary CSS transforms to rotate the items
container.style.transform = `rotate(${angle}deg)`;
