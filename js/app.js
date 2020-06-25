'use strict';
//we will define global variable
//this is for the scenarios

//====================== Global Variables =======================================
var allScenarios = [];
var indexNumber = 0;

var pointsEarned = [];
var totalPoints = 0;
var finalPointTotal; //to hold tally before going to results page
// var totalPoints = arrSum(pointsEarned);

var goodScoreLinks = [reopenLink, essentialErrandsLink, goOutLink];
var badScoreLinks = [handwashingLink, feelingSick, sixFeetLink];

var protestLinks = gatheringLink;
var diningLinks = diningOutLink;
var travelLinks = travelLink;

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

var groceries = new Scenario(
  'images/groceries.jpg',
  'Your food supply is running low and you’ve decided it’s time to venture out for groceries. How should you best do this?',
  ['If online grocery delivery isn’t an option, wear your face mask and practice diligent social distancing at the store. Use hand sanitizer when done, wash your hands when you return home.', 'Grab your face mask and all your reusable bags from home, and head to the grocery store.', 'Don’t worry about the face mask, some stores don’t require it.', 'Head to the grocery store, business as usual! Nothing to worry about, we all wash our fruit and vegetables anyway.'],
  [0, 1, 2, 3],
  ['0 pt: If online grocery delivery isn’t an option, wear your face mask and practice diligent social distancing at the store. Use hand sanitizer when done, wash your hands when you return home.', '1 pt: Grab your face mask and all your reusable bags from home, and head to the grocery store.', '2 pt: Don’t worry about the face mask, some stores don’t require it.', '3 pt: Head to the grocery store, business as usual! Nothing to worry about, we all wash our fruit and vegetables anyway.'],
  'From the CDC: “Recent studies indicate that a significant portion of individuals with coronavirus lack symptoms (“asymptomatic”) and that even those who eventually develop symptoms (“pre-symptomatic”) can transmit the virus to others before showing symptoms.” Please wear a mask when you\'re out and about!'
);

var hiking = new Scenario(
  'images/hiking.jpeg',
  'The state is starting to reopen, so you’re out hiking and realize you’re on an overcrowded trail. You know you need to maintain social distance, how should you handle this?',
  ['The state is starting to reopen, so you’re out hiking and realize you’re on an overcrowded trail. You know you need to maintain social distance, how should you handle this?', 'Leave and find another trail that’s not as crowded.', 'Keep a distance of at least 6 feet between you and other hikers.', 'Hold out your arms… your arm length is a big enough distance.', 'Don’t worry - as long as you’re wearing a mask, it doesn’t matter.'],
  [0, 1, 2, 3],
  ['0 pt: Leave and find another trail that’s not as crowded.', '1 pt: Keep a distance of at least 6 feet between you and other hikers', '2 pt: Hold out your arms …your arm length is a big enough distance.', '3 pt: Don’t worry - as long as you’re wearing a mask, it doesn’t matter.'],
  'Do your research! Head for less popular trails, and have a few back-ups in mind in case your first choice is crowded. If you’re encounter other hikers, try to maintain a distance of 6 feet between you and any other hikers (that’s about the width of an average sedan). You should definitely bring hand sanitizer and your face mask, but maintaining distance is the best line of defense.'
);

var feelingSick = new Scenario(
  'images/sick.png',
  'You’ve followed all the recommendations, but are starting to feel a bit sick. What is your best course of action?',
  ['If you have any emergency warning signs, seek medical help immediately. Otherwise, stay home, keep track of your symptoms and contact your healthcare provider.', 'Wear your face mask and go to your neighborhood pharmacy for over-the-counter relief of mild symptoms.', 'Stay home and tough it out; it probably isn’t anything to worry about.', 'Take the bus to the hospital immediately, no time to grab your face mask.'],
  [0, 1, 2, 3],
  ['0 pt: If you have any emergency warning signs, seek medical help immediately. Otherwise, stay home, keep track of your symptoms and contact your healthcare provider.', '1 pt: Wear your face mask and go to your neighborhood pharmacy for over-the-counter relief of mild symptoms.', '2 pt: Stay home and tough it out; it probably isn’t anything to worry about.', '3 pt: Take the bus to the hospital immediately, no time to grab your face mask.'],
  'Most people who experience mild illness are able to recover from home, but it’s wise to contact your health care provider if you believe you’ve been exposed to COVID-19. It’s also critical to minimize the risk of transmission to your community, so if you need to leave your house for medical treatment or other critical reasons, you should take every precaution. This includes wearing a face covering and maintaining social distance.'
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

var hikingLink = new OutsideLinks(
  'WTA: Hiking in the Time of Coronavirus',
  'https://www.wta.org/go-outside/social-distancing-hiking-in-the-time-of-coronavirus'
);

var ifSickLink = new OutsideLinks(
  'CDC: What to Do If You Are Sick',
  'https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html'
);

var essentialErrandsLink = new OutsideLinks(
  'CDC: Running Essential Errands',
  'https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/essential-goods-services.html'
);

var sixFeetLink = new OutsideLinks(
  'CNN: Social distancing means standing 6 feet apart',
  'https://www.cnn.com/2020/03/24/health/six-feet-social-distance-explainer-coronavirus-wellness/index.html'
);

var goOutLink = new OutsideLinks(
  'CNN: Deciding to Go Out',
  'https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/deciding-to-go-out.html'
);

var reopenLink = new OutsideLinks(
  'How We Reopen Safely',
  'https://www.covidexitstrategy.org/'
);

var diningOutLink = new OutsideLinks(
  'CDC: Considerations for Restaurants and Bars',
  'https://www.cdc.gov/coronavirus/2019-ncov/community/organizations/business-employers/bars-restaurants.html'
);

var travelLink = new OutsideLinks(
  'CDC: Considerations for Travelers',
  'https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-in-the-us.html'
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
  submitButton.textContent = 'Submit';
  answerChoiceContainer.appendChild(submitButton);
}

//happens upon page load and anytime they click next question
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
    putFinalScoreInStorage();
  }
}

//put totalPoints in local storage for retrieval in results.js
function putFinalScoreInStorage() {
  finalPointTotal = totalPoints;
  var finalPointTotalStringified = JSON.stringify(finalPointTotal);
  localStorage.setItem('storedPoints', finalPointTotalStringified);
}



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
//reduced
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


