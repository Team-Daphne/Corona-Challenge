'use strict';
//we will define global variable
//this is for the scenarios

//====================== Global Variables =======================================
var allScenarios = [];
var indexNumber = 0;

var pointsEarned = [];
var totalPoints = 0;

var goodScoreLinks = [];
var badScoreLinks = handwashingLink;

var protestLinks = gatheringLink;
var diningLinks = [];
var travelLinks = [];
//arrSum (of pointsEarned []);

//====================== Constructor Function =======================================
function Scenario(img, question, answerOptions, pointValue, finalAnswerKey, finalAnswer){
  this.img = img;
  this.question = question;
  this.answerOptions = answerOptions;
  this.pointValue = pointValue;
  this.finalAnswerKey = finalAnswerKey;
  this.finalAnswer = finalAnswer;
  allScenarios.push(this);
}

function OutsideLinks(text, link){
  this.text = text;
  this.link = link;
  //this.category = category;
}

//====================== Scenario Objects =======================================

var handShake = new Scenario(
  'images/handshake-copy.png',
  'Somebody approaches you with an outstretched hand for a handshake. What should you do?',
  ['Hold your hand to your heart in order to politely decline.', 'Offer a fist bump instead.', 'Go ahead and shake their hand.', 'Embrace them in a bear hug instead.'],
  [0, 1, 2, 3],
  ['0 pt: Hold your hand to your heart in order to politely decline.', '1 pt: Offer a fist bump instead.', '2 pt: Go ahead and shake their hand.', '3 pt: Embrace them in a bear hug instead.'],
  'The best option is always to avoid any unnecessary contact! Holding your hand to your heart is a polite way to decline a handshake.'
);

var handwashing = new Scenario(
  'images/handwashing-lg.jpg',
  'You return home for the day and need to clean your hands. Describe your procedure...',
  ['Scrub with soap and water for 20 seconds', 'A few pumps of hand sanitizer before you touch anything in your home', 'A quick rinse from the hose before you walk inside', 'Wipe your hands on your pants before you open your front door'],
  [0, 1, 2, 3],
  ['0 pt: Scrub with soap and water for 20 seconds', '1 pt: A few pumps of hand sanitizer before you touch anything in your home', '2 pt: A quick rinse from the hose before you walk inside', '3 pt: Wipe your hands on your pants before you open your front door'],
  'Although you could certainly pick another song, singing Twinkle Twinkle Little Star twice ensures you\'ve washed your hands for a minimum of 20 seconds.'
);


//====================== link objects =======================================

var gatheringLink = new OutsideLinks(
  'CDC recommendations for large gatherings',
  'https://www.cdc.gov/coronavirus/2019-ncov/community/large-events/considerations-for-events-gatherings.html'
);

var handwashingLink = new OutsideLinks(
  'CDC recommendations for handwashing',
  'https://www.cdc.gov/handwashing/when-how-handwashing.html'
);

//====================== Functions =======================================

//happens upon page load and anytime they click next question
function renderScenarioToPage(){
  var questionContainer = document.getElementById('scenario-container');
  var question = document.createElement('p');

  question.textContent = allScenarios[indexNumber].question;
  questionContainer.appendChild(question);

  //----------------------- the above works to render the questions

  var answerChoiceContainer = document.getElementById('answer-container');

  // for (var i = 0; i < 4; i++){
  //   var answerChoice = document.createElement('input');
  //   answerChoice.type = 'radio';
  //   answerChoiceContainer.appendChild(answerChoice);

  //   var answerLabel = document.createElement('label');
  //   answerLabel.textContent = allScenarios[indexNumber].answerOptions[i];
  //   answerChoiceContainer.appendChild(answerLabel);
  // }
  //============test to replace above for loop========
  var answerChoice = document.getElementById('label0');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[0];

  answerChoice = document.getElementById('label1');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[1];

  answerChoice = document.getElementById('label2');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[2];

  answerChoice = document.getElementById('label3');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[3];
  //==========end test======


  var submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.style.width = '100px';
  submitButton.style.height = '40px';
  submitButton.style.marginTop = '50px';
  submitButton.style.fontSize = '18pt';
  submitButton.textContent = 'submit';
  answerChoiceContainer.appendChild(submitButton);

  //TODO: CH DONE - change order of above so that the radio button shows before the text
  //TODO: CH DONE (with reconfig) make sure each answer is on a separate line
  //TODO: CH DONE (with reconfig) move button to check answer below everything else

  //referenced this webpage to discover how to set backgroundImage via JavaScript: https://code.likeagirl.io/js-set-a-background-using-code-1cc26cf96ce4// and https://www.w3schools.com/jsref/prop_style_background.asp

  // can use first one to target body, or use second (commented out) to target div, then style/size div in CSS; CH note - second option seems to work better leaving first in for temp. reference

  // document.body.style.background = 'url('+ allScenarios[indexNumber].img +')';
  // document.body.style.backgroundRepeat = 'repeat-y';
  // document.body.style.backgroundSize = '700px';

  document.getElementById('background-image-div').style.backgroundImage = 'url('+ allScenarios[indexNumber].img +')';
  document.getElementById('background-image-div').style.backgroundRepeat = 'repeat-y';
  document.getElementById('background-image-div').style.backgroundSize = 'cover';
}

function renderCorrectAnswer(){
  // var answerChoiceContainer = document.getElementById('answer-container');
  // var answerLabel = document.createElement('p');
  // answerLabel.textContent = allScenarios[indexNumber].finalAnswer;
  // answerChoiceContainer.parentNode.replaceChild(answerLabel, answerChoiceContainer);

  //test to replace===
  document.getElementById('answer-container').style.display = 'none';
  var answerKey = document.getElementById('answer-key');
  for (var i=0; i < 4; i++){
    var answerChoice = document.createElement('li');
    answerChoice.textContent = allScenarios[indexNumber].finalAnswerKey[i];
    answerKey.appendChild(answerChoice);
  }
  var finalAnswerContainer = document.getElementById('final-answer-section');
  var finalAnswerText = document.createElement('p');
  finalAnswerText.textContent = allScenarios[indexNumber].finalAnswer;
  finalAnswerContainer.appendChild(finalAnswerText);

  var nextButtonHolder = document.getElementById('next-button-holder');
  var nextQuestionButton = document.createElement('button');
  nextQuestionButton.type = 'click';
  nextQuestionButton.setAttribute('id', 'next-button');//adds an ID to newly created element!
  nextQuestionButton.onclick = handleClickNextQuestion; //event listener IS HERE
  nextQuestionButton.style.width = '100px';
  nextQuestionButton.style.height = '40px';
  nextQuestionButton.style.marginTop = '50px';
  nextQuestionButton.style.fontSize = '18pt';
  nextQuestionButton.textContent = 'Next';
  nextButtonHolder.appendChild(nextQuestionButton);

//end test==
}

//============Event Handler to replace answer choices w/ answer=======

var checkButton = document.getElementById('answer-container');
checkButton.addEventListener('submit', handleSubmitAnswer);

function handleSubmitAnswer(event){
  event.preventDefault();
  renderCorrectAnswer();
}

//add event listener
// var nextButton = document.getElementById('next-button');
// nextButton.addEventListener('click', handleClickNextQuestion);

function handleClickNextQuestion(event2){
  //incrementing global var indexNumber in this function allows us to move through the allScenarios array
  event2.preventDefault();
  indexNumber++;
  renderScenarioToPage();
}



// //handleSeeMyResults will transfer points to the result page
// //and render the recommended links based off of quiz results and the user profile
// //
// function handleSeeMyResults(event3){

// }



// function updatePointEarned(){

// }



renderScenarioToPage();
