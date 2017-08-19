'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let toggle = true;
  let winNer = {};
  let horWin = () => {
    if (winNer[0] === winNer[1] && winNer[1] === winNer[2] && winNer[1] !== undefined || winNer[3] === winNer[4] && winNer[4] === winNer[5] && winNer[4] !== undefined || winNer[6] === winNer[7] && winNer[7] === winNer[8] && winNer[7] !== undefined) {
      return true;
    }
  };
  let vertWin = () => {
    if (winNer[0] === winNer[3] && winNer[3] === winNer[6] && winNer[3] !== undefined || winNer[1] === winNer[4] && winNer[4] === winNer[7] && winNer[4] !== undefined || winNer[2] === winNer[5] && winNer[5] === winNer[8] && winNer[5] !== undefined) {
      return true;
    }
  };
  let diagonalWin = () => {
    if (winNer[0] === winNer[4] && winNer[4] === winNer[8] && winNer[4] !== undefined || winNer[2] === winNer[4] && winNer[4] === winNer[6] && winNer[4] !== undefined) {
      return true;
    }
  };
  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        const turn = toggle ? 'X' : 'O';
        e.target.innerHTML = turn;
        winNer[e.target.attributes[0].value] = turn;
        toggle = !toggle;
      } else {
        alert('nice try!');
      }
      if (diagonalWin()) {
        alert('Diagonal Fatality!');
      } else if (horWin()) {
        alert('Horizontal Fatality!');
      } else if (vertWin()) {
        alert('Vertical Fatality!');
      }
    });
  });
  //  clear button
  document.querySelector('button').addEventListener('click', (e) => {
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
      winNer = {};
    });
  });
});
