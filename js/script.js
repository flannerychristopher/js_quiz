const questionElement = document.getElementById('question');
const progressElement = document.getElementById('progress');
const choiceElements = document.querySelectorAll('.choice');
const guessElements = document.querySelectorAll('.guess');
const guesses = [];

function Quiz() {
  this.questions = [];
}
const quiz1 = new Quiz();

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
    console.log('correct');
  } else {
    console.log('incorrect');
  }
}
const question1 = new Question("Who is the best quarterback ever?", 0, ["Tom Brady", "Joe Montana", "John Elway", ]);
question1.toHTML();

function buttonListener() {
  for (i = 0; i < guessElements.length; i++) {
    let num = i;
    guessElements[num].addEventListener("click", function() {
      console.log('test' + num);
      guesses.push( num );
      question1.check();
    });

  }
}
buttonListener();
