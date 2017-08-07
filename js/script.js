const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const progressElement = document.getElementById('progress');
const choiceElements = document.querySelectorAll('.choice');
const guessElements = document.querySelectorAll('.guess');

// QUIZ CONSTRUCTOR
function Quiz() {
  this.questions = [];
  this.questionIndex = 0;
  this.guesses = [];
  this.wrongGuesses = 0;
  this.rightGuesses = 0;
}
Quiz.prototype.add = function(question) {
  this.questions.push(question);
}
Quiz.prototype.render = function(i) {
  if (this.questions[i]) {
    this.questions[i].toHTML();
  } else {
    progressElement.innerHTML += ' All Done! Great Job!';
    quizElement.innerHTML = '';
  }
}

// QUESTiONS CONSTRUCTOR
function Question(question, answer, choices) {
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
  if (this.answer === quiz1.guesses[this.answer] ) {
    quiz1.rightGuesses += 1;
    this.guess = true;
  } else {
    quiz1.wrongGuesses += 1;
    this.guess = false;
  }
}

// INITIALIZE QUIZ AND QUESTIONS
const quiz1 = new Quiz();
const question1 = new Question("Who is the best quarterback ever?", 0, ["Tom Brady", "Joe Montana", "John Elway"]);
const question2 = new Question("What color is the sky?", 1, ["red", "blue", "green"]);
quiz1.add(question1);
quiz1.add(question2);
quiz1.render(quiz1.questionIndex);

// LISTEN FOR BUTTON CLICKS
function buttonListener() {
  for (i = 0; i < guessElements.length; i++) {
    let num = i;
    guessElements[num].addEventListener("click", function() {
      console.log('test' + num);
      quiz1.guesses.push( num );
      quiz1.questions[quiz1.questionIndex].check();

      progressElement.innerHTML = 'You have answered ' + quiz1.rightGuesses +
                      ' correctly and ' + quiz1.wrongGuesses + ' incorrectly.';
      quiz1.questionIndex += 1;
      quiz1.render(quiz1.questionIndex);
    });
  }
}
buttonListener();
