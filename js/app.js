'use strict';
//we will define global variable
//this is for the scenarios

//====================== Global Variables =======================================
var allScenarios = [];
var pointsEarned = [];
var totalPoints = 0;
var goodScoreLinks = [];
var badScoreLinks = [];
var protestLinks = [];
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