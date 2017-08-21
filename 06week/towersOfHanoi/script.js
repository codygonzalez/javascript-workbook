'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};

  document.querySelectorAll('.block').forEach((block) => {
    block.addEventListener('click', (e) => {
      // e.stopPropagation();
      moved = { target: e.target, size: e.target.clientHeight, parent: e.target.parentNode };
      e.target.parentNode.removeChild(e.target);
    });
  });
  document.querySelector('.container1').addEventListener('click', (e) => {
    e.target.appendChild(moved.target);
    if (!e.target.children.length) {
      e.target.appendChild(moved.target);
    } else {
      moved.parent.appendChild(moved.target);
    }
  });
  document.querySelector('.container2').addEventListener('click', (e) => {
    let last = e.target.children[e.target.children.length - 1];
    let size = last && last.clientHeight;
    if (!last || size > moved.target) {
      e.target.appendChild(moved.target);
    } else {
      moved.parent.appendChild(moved.target);
    }
  });
  document.querySelector('.container3').addEventListener('click', (e) => {
    let last = e.target.children[e.target.children.length - 1];
    let size = last && last.clientHeight;
    if (!last || size > moved.target) {
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
