'use strict';
//we will define global variable
//this is for the scenarios

//====================== Global Variables =======================================
var allScenarios = [];
var indexNumber = 0;

var pointsEarned = [];
var totalPoints = 0;
// var totalPoints = arrSum(pointsEarned);
//a

var goodScoreLinks = [];
var badScoreLinks = handwashingLink;

var protestLinks = gatheringLink;
var diningLinks = [];
var travelLinks = [];

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
//=============================User Contructor======================
function User(name, age, protests, travel, diningOut){
  this.name = name;
  this.age = age;
  this.protests = protests;
  this.travel = travel;
  this.diningOut = diningOut;
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
function makeSubmitButton() {
  var answerChoiceContainer = document.getElementById('answer-container');
  var submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.style.width = '100px';
  submitButton.style.height = '40px';
  submitButton.style.marginTop = '50px';
  submitButton.style.fontSize = '18pt';
  submitButton.textContent = 'submit';
  answerChoiceContainer.appendChild(submitButton);
}

//happens upon page load and anytime they click next question!!
function renderScenarioToPage(){
  //hide the other thing here
  document.getElementById('answer-key').style.display = 'none';
  document.getElementById('final-answer-section').style.display = 'none';


  //if statement... if this greater then first iteration (index is > 0) then
  if (indexNumber > 0){
    var answerKeyContainer = document.getElementById('answer-key');
    // answerKeyContainer.removeChild(answerKeyContainer.firstChild);
    answerKeyContainer.innerHTML= '';
    var finalAnswerSection = document.getElementById('final-answer-section');
    finalAnswerSection.removeChild(finalAnswerSection.firstChild);
  }

  document.getElementById('answer-container').style.display = 'block';
  var questionContainer = document.getElementById('scenario-container');
  var question = document.getElementById('the-question');
  question.textContent = allScenarios[indexNumber].question;
  questionContainer.appendChild(question);

  //----------------------- the above works to render the questions

  // for (var i = 0; i < 4; i++){
  //   var answerChoice = document.createElement('input');
  //   answerChoice.type = 'radio';
  //   answerChoiceContainer.appendChild(answerChoice);

  //   var answerLabel = document.createElement('label');
  //   answerLabel.textContent = allScenarios[indexNumber].answerOptions[i];
  //   answerChoiceContainer.appendChild(answerLabel);
  // }

  var answerChoice = document.getElementById('label0');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[0];

  answerChoice = document.getElementById('label1');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[1];

  answerChoice = document.getElementById('label2');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[2];

  answerChoice = document.getElementById('label3');
  answerChoice.textContent = allScenarios[indexNumber].answerOptions[3];




  //referenced this webpage to discover how to set backgroundImage via JavaScript: https://code.likeagirl.io/js-set-a-background-using-code-1cc26cf96ce4// and https://www.w3schools.com/jsref/prop_style_background.asp

  // can use first one to target body, or use second (commented out) to target div, then style/size div in CSS; CH note - second option seems to work better leaving first in for temp. reference

  // document.body.style.background = 'url('+ allScenarios[indexNumber].img +')';
  // document.body.style.backgroundRepeat = 'repeat-y';
  // document.body.style.backgroundSize = '700px';

  document.getElementById('background-image-div').style.backgroundImage = 'url('+ allScenarios[indexNumber].img +')';
  document.getElementById('background-image-div').style.backgroundRepeat = 'repeat-y';
  document.getElementById('background-image-div').style.backgroundSize = 'cover';
  makeSubmitButton();
}

function makeNextButton() {
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
}

function makeSeeResultsButton() {
  var seeResultsButtonHolder = document.getElementById('get-results-button-holder');
  var seeResultsButton = document.createElement('button');
  seeResultsButton.type = 'click';
  seeResultsButton.onclick = handleClickSeeResults;
  seeResultsButton.style.width = '200px';
  seeResultsButton.style.height = '40px';
  seeResultsButton.style.marginTop = '50px';
  seeResultsButton.style.fontSize = '18pt';
  seeResultsButton.textContent = 'See results!';
  seeResultsButtonHolder.appendChild(seeResultsButton);
}

function renderCorrectAnswer(){
  // var answerChoiceContainer = document.getElementById('answer-container');
  // var answerLabel = document.createElement('p');
  // answerLabel.textContent = allScenarios[indexNumber].finalAnswer;
  // answerChoiceContainer.parentNode.replaceChild(answerLabel, answerChoiceContainer);

  document.getElementById('answer-container').style.display = 'none';
  document.getElementById('final-answer-section').style.display = 'block';
  //delete/remove submit button
  var answerContainerHoldingSubmit = document.getElementById('answer-container');
  // reference https://stackoverflow.com/questions/13763/how-can-i-remove-a-child-node-in-html-using-javascript
  answerContainerHoldingSubmit.removeChild(answerContainerHoldingSubmit.lastChild);
  //bring the other thing
  document.getElementById('answer-key').style.display = 'block';
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
  // may need to pay attention to make next button here
  if (indexNumber < (allScenarios.length-1)){
    makeNextButton();
  } else {
    makeSeeResultsButton();
  }
}



//when we click submit on the last question, we DON"T want renderScenarioToPage, we want new function that shows "get results button"

//=================== Getting value from radio buttons =================




//---------the below works to access the button thats clicked, but we need to figure out how to read value of it
function registerAnswer(){
  var radioButtons = document.getElementsByName('answer-choice');
  for (var i = 0; i < radioButtons.length; i++){

    if (radioButtons[i].checked)
      var checkedButtonValue = parseInt(radioButtons[i].value);
  }

  totalPoints += checkedButtonValue;
}

//https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button

// var totalPoints = arrSum(pointsEarned);



//============Event Handler to replace answer choices w/ answer=======

function handleClickNextQuestion(event2){
  //incrementing global var indexNumber in this function allows us to move through the allScenarios array
  // event2.preventDefault();
  indexNumber++;
  // document.getElementById('next-button-holder').style.display = 'none';
  var nextButtonHolder = document.getElementById('next-button-holder');
  // reference https://stackoverflow.com/questions/13763/how-can-i-remove-a-child-node-in-html-using-javascript
  nextButtonHolder.removeChild(nextButtonHolder.lastChild);
  // displayAnswerContainer();
  renderScenarioToPage();
}
//removed event3from parenthesis
// var finalPointTotal = totalPoints
function handleClickSeeResults() {
  location.href = 'results.html';
}
// debugger;


function handleSubmitAnswer(event){
  event.preventDefault();
  //insert function to check answer
  registerAnswer();
  renderCorrectAnswer();

}




// //handleSeeMyResults will transfer points to the result page
// //and render the recommended links based off of quiz results and the user profile




// function updatePointEarned(){

// }


