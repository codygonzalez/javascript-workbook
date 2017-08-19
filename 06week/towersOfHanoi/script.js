'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};

  document.querySelectorAll('[data-block]').forEach((block) => {
    block.addEventListener('click', (e) => {
      e.stopPropagation();
      moved = { size: e.target.attributes[0].value };
      e.target.parentNode.removeChild(e.target);
      console.log(moved.size);
    });
  });
  document.querySelector('[data-stack]').addEventListener('click', (e) => {
    if (!e.target.children.length) {
      e.target.appendChild(moved.target);
    } else {
      moved.parent.appendChild(moved.target);
    }
  });
});
// document.querySelector('[data-stack]').addEventListener('click', (e) => {
//   e.target.appendChild(moved.target);
// });
/*
// moved = { target: e.target, parent: e.target.parentNode };
// originally at line 10: moved = { size: e.target.attributes[0].value };
add attributes for each block for the size so as not to be able to stack on each other
*/
