'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard () {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution () {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint (solution, guess) {
  var answerLtr = 0;
  var answerLoc = 0;
  var solutionArr = solution.split('');
  var guessArr = guess.split('');
  for (var i = 0; i < solutionArr.length; i++) {
    if (solutionArr[i] === guessArr[i]) {
      answerLoc++;
      solutionArr[i] = null;
    }
  }

  for (i = 0; i < solutionArr.length; i++) {
    var actLetr = solutionArr.indexOf(guessArr[i]);
    if (actLetr > -1) {
      answerLtr++;
      solutionArr[actLetr] = null;
    }
  }
  return answerLoc + '-' + answerLtr;
}

function mastermind (guess) {
  solution = 'abcd';
  if (guess === solution) {
    return ('You guessed it!');
  } else if (board.length === 10) {
    return ('Oh, no! You suck again!');
  } else {
    var hint = generateHint(solution, guess);
    board.push(guess + ': ' + hint);
    return 'Never fear..';
  }
}

function getPrompt () {
  rl.question('guess: ', (guess) => {
    // mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  describe('#mastermind()', function () {
    it('should register a guess and generate hints', function () {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', function () {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', function () {
    it('should generate hints', function () {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', function () {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
