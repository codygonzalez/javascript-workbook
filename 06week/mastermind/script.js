'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  document.getElementById('submit-guess').addEventListener('click', (e) => {
    let answer = document.getElementById('answer').value;
    let attempt = document.getElementById('attempt').value;
    let code = document.getElementById('code');
    let input = document.getElementById('user-guess').value;
    let message = document.getElementById('message');
    let results = document.getElementById('results');

    message.innerHTML = '';

    if (answer === '') {
      answer = Math.floor(Math.random() * 10000).toString();
      while (answer.length < 4) {
        answer = '0' + answer;
      }
      document.getElementById('answer').value = answer;
    }
    if (attempt === '') {
      attempt = 0;
    }
    if (input.length !== 4) {
      message.innerHTML = 'Did you read the rules?';
      return;
    } else {
      attempt++;
      document.getElementById('attempt').value = attempt;
    }

    let correct = 0;
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for (let i = 0; i < input.length; i++) {
      if (input.charAt(i) === answer.charAt(i)) {
        html += '$';
        correct++;
      } else if (answer.indexOf(input.charAt(i)) > -1) {
        html += '~';
      } else {
        html += 'X';
      }
    }
    html += '</div></div>';

    results.innerHTML += html;

    if (correct === input.length) {
      message.innerHTML = 'Human, you have cracked the code!';
      code.innerHTML = answer;
    } else if (attempt >= 10) {
      message.innerHTML = 'You have not been successful, human. I am disappointed in you.';
      code.innerHTML = answer;
    } else {
      message.innerHTML = 'Try again, human.';
    }
  });
});
