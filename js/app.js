'use strict';
//we will define global variable
//this is for the scenarios

//====================== Global Variables =======================================
var allScenarios = [];
var pointsEarned = [];
var totalPoints = 0;
var goodScoreLinks = [];
var badScoreLinks = [];
var protestLinks = gatheringLink;
var diningLinks = [];
var travelLinks = [];
//arrSum (of pointsEarned []);

//====================== Constructor Function =======================================
function Scenario(img, question, answerOptions, pointValue, finalAnswer ){
    this.img = img;
    this.question = question;
    this.answerOptions = [];
    this.pointValue = pointValue;
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
    'images/handshake.png', 
    'some one wants to shake your hand',
    ['hold your hand to heart...', 'fist', 'shake hand', 'give hug'],
    [0, 1, 2, 3],
    'hold your hand to heart is correct answer'
);

//====================== link objects =======================================

var gatheringLink = new OutsideLinks(
    'CDC recomendations for large gatherings',
    'https://www.cdc.gov/coronavirus/2019-ncov/community/large-events/considerations-for-events-gatherings.html'
);

//====================== Functions =======================================

function renderScenarioToPage(){

};

function renderCorrectAnswer(){

};



function handleSubmitAnswer(event){

};

function handleClickNextQuestion(event2){

};

function handleSeeMyResults(event3){

};

function updatePointEarned(){

};

