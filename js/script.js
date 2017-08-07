const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const progressElement = document.getElementById('progress');
const choiceElements = document.querySelectorAll('.choice');
const guessElements = document.querySelectorAll('.guess');
const startButton = document.getElementById('start');

// QUIZ CONSTRUCTOR
function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
  this.guesses = [];
  this.wrongGuesses = 0;
  this.rightGuesses = 0;
}
Quiz.prototype.add = function(question) {
  this.questions.push(question);
}
Quiz.prototype.listen = function() {
  buttonListener(this);
}
Quiz.prototype.render = function(i) {
  if (this.questions[i]) {
    this.questions[i].toHTML();
  } else {
    progressElement.innerHTML += ' All Done! Great Job!';
    quizElement.innerHTML = '';
  }
};

// QUESTiONS CONSTRUCTOR
function Question(question, answer, choices) {
  this.question = question;
  this.answer = answer;
  this.choices = choices;
  this.guess = false;
}
Question.prototype.toHTML = function() {
  questionElement.textContent = this.question;
  for (i = 0; i < this.choices.length; i++) {
    let num = i;
    choiceElements[num].textContent = this.choices[num];
  }
};
Question.prototype.check = function() {
  if (this.answer === quiz1.guesses[this.answer] ) {
    quiz1.rightGuesses += 1;
    this.guess = true;
  } else {
    quiz1.wrongGuesses += 1;
    this.guess = false;
  }
};

// INITIALIZE QUIZ AND QUESTIONS
let questions = [
  new Question("Who is the best quarterback ever?", 0, ["Tom Brady", "Joe Montana", "John Elway"]),
  new Question("Who is the only offensive football player to win five Super Bowls?", 1, ["Deion Sanders", "Tom Brady", "Dan Marino"]),
  new Question("Who is married to a Brazilian supermodel?", 2, ["Donald Trump", "Tom Cruise", "Tom Brady"]),
  new Question("Which athlete is from San Mateo, California?", 0, ["Tom Brady", "Nomar Garciaparra", "Bobby Orr"])
]
const quiz1 = new Quiz(questions);
quiz1.render(quiz1.questionIndex);
quiz1.listen();

// LISTEN FOR BUTTON CLICKS
function buttonListener(quiz) {
  for (i = 0; i < guessElements.length; i++) {
    let num = i;
    guessElements[num].addEventListener("click", function() {
      quiz.guesses.push( num );
      quiz.questions[quiz.questionIndex].check();
      progressElement.innerHTML = 'You have answered ' + quiz.rightGuesses +
                      ' correctly and ' + quiz.wrongGuesses + ' incorrectly.';
      quiz.questionIndex += 1;
      quiz.render(quiz.questionIndex);
    });
  }
}
