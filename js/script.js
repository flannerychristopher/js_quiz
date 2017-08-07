const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const progressElement = document.getElementById('progress');
const choiceElements = document.querySelectorAll('.choice');
const guessElements = document.querySelectorAll('.guess');
const guesses = [];
let currentQuestion = 0;
let wrongGuesses = 0;
let rightGuesses = 0;

// QUIZ CONSTRUCTOR
function Quiz() {
  this.questions = [];
}
Quiz.prototype.add = function(question) {
  this.questions.push(question);
}
Quiz.prototype.render = function(currentQuestion) {
  if (this.questions[currentQuestion]) {
    this.questions[currentQuestion].toHTML();
  } else {
    progressElement.innerHTML += ' All Done! Great Job!';
    quizElement.innerHTML = '';

  }
}

// QUESTiONS CONSTRUCTOR
function Question(question, answer, choices, guess) {
  this.question = question;
  this.answer = answer;
  this.choices = choices;
  this.guess = false;
}
Question.prototype.guess = function() {

}
Question.prototype.toHTML = function() {
  questionElement.textContent = this.question;
  for (i = 0; i < this.choices.length; i++) {
    let num = i;
    choiceElements[num].textContent = this.choices[num];``
  }
}
Question.prototype.check = function() {
  if (this.answer === guesses.indexOf( this.answer ) ) {
    rightGuesses += 1;
  } else {
    wrongGuesses += 1;
  }
}

// INITIALIZE QUIZ AND QUESTIONS
const quiz1 = new Quiz();
const question1 = new Question("Who is the best quarterback ever?", 0, ["Tom Brady", "Joe Montana", "John Elway"]);
const question2 = new Question("What color is the sky?", 1, ["red", "blue", "green"]);
quiz1.add(question1);
quiz1.add(question2);
quiz1.render(currentQuestion);

function buttonListener() {
  for (i = 0; i < guessElements.length; i++) {
    let num = i;
    guessElements[num].addEventListener("click", function() {
      console.log('test' + num);
      guesses.push( num );
      question1.check();

      progressElement.innerHTML = 'You have answered ' + rightGuesses +
                      ' correctly and ' + wrongGuesses + ' incorrectly.';
      currentQuestion += 1;
      quiz1.render(currentQuestion);
    });
  }
}
buttonListener();
