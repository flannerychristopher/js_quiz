const questionElement = document.getElementById('question');
// const choice0Element = document.getElementById('choice0');
// const choice1Element = document.getElementById('choice1');
// const choice2Element = document.getElementById('choice2');
// const guess0Element = document.getElementById('guess0');
// const guess1Element = document.getElementById('guess1');
// const guess2Element = document.getElementById('guess2');
const progressElement = document.getElementById('progress');
const choiceElements = document.querySelectorAll('.choice');
const guessElements = document.querySelectorAll('.guess');

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

const question1 = new Question("Who is the best quarterback ever?", "Tom Brady", ["Tom Brady", "Joe Montana", "John Elway", ]);
question1.toHTML();
