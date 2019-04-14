function ask() {
  var person = prompt('What is your name?', 'Gerard');
  var correct = 0;
  var testing = 'False';
  for (i = 0; i < 2; i++) {
    var random1 = Math.floor(Math.random() * 40 + 1);
    var random2 = Math.floor(Math.random() * 40 + 1);
    var question = 'What is ' + random1 + ' + ' + random2;
    var answer = random1 + random2;
    var user_answer = prompt(question);
    if (user_answer != null) {
      if (user_answer == answer) {
        correct += 1;
      } else if (isNaN(user_answer)) {
        document.getElementById('pic').src = 'images/doh.jpg';
        document.getElementById('message').innerHTML =
          'Seriously ' + person + ', That is not a number...';
        testing = 'True';
        i = 2;
      }
    } else {
      document.getElementById('pic').src = 'images/ok.jpg';
      document.getElementById('message').innerHTML =
        'Can you please press OK???';
      testing = 'True';
      i = 2;
    }
  }
  if (testing == 'False') {
    if (correct > 0) {
      document.getElementById('pic').src = 'images/cake.jpg';
      document.getElementById('message').innerHTML =
        'Congrats ' + person + ' You got more than 50% Correct!';
      document.getElementById('correct').innerHTML = 'Correct: ' + correct;
    } else {
      document.getElementById('pic').src = 'images/fail.jpg';
      document.getElementById('message').innerHTML =
        'Really? ' + person + ', Did you even go too school?';
      document.getElementById('correct').innerHTML = 'Correct: ' + correct;
    }
  }
}
