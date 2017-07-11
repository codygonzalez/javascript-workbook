'use strict';
// get date function
function getDate () {
  return new Date();
}

// convert to string function
function convertToString (num) {
  return num.toString();
}

// convert to num function
function toNum (string) {
  return parseInt(string);
}

// return type//
function type (x) {
  return typeof (x);
}

// add two numbers
function addTwoNum (x, y) {
  return x + y;
}
// both are true
function true1 (x) {
  if (x > 1 && x < 10) {
    console.log('both are true');
  }
}
// when one of two things is true
function true2 (x) {
  if (x > 10 || x > 20) {
    console.log('one is true');
  }
}
// when both are not true
function notTrue (x, y) {
  if (x !== y || y !== x) {
    console.log('both are NOT true');
  }
}
// "calling me calling me"
getDate();
convertToString(93874563455);
toNum('092835');
type(true);
addTwoNum(333, 333);
true1(4);
true2(11);
notTrue(20, 10);
