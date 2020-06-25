'use strict';
//this JS file will drive landing page and results page
//we will deal with the form on landing page, and store  local info
//retreive local storage, and then send that on the reslts page

//TODO:************ handle info from form submit
//TODO:************ save user info to local storage
// TODO:********** create an object or object contructor for userProfile

//TODO: Stretch: landing page load signifies either new user or return user
// there is logic in bus mall app re knowing if something is in local storage or not yet

//we will need to access some of the things from app.js here
// we're using the links constructor here to show results and links


var finalPointsFromStorage;

//==========================Grab data from local storage==================
var getProfileFromStorage = localStorage.getItem('storedProfile');
var profileFromStorage = JSON.parse(getProfileFromStorage);


//==========================Render Results to Page==========================
function renderResultsToPage(){
  if(finalPointsFromStorage === null){

    var showTotalPoints = document.getElementById('point-results');
    var pointsTotal = document.createElement('p');
    pointsTotal.textContent = 'Here are some links you might find helpful!';
    showTotalPoints.appendChild(pointsTotal);
  }else{
    var showTotalPoints = document.getElementById('point-results');
    var pointsTotal = document.createElement('h4');
    pointsTotal.textContent = 'Your score was: ' + finalPointsFromStorage;
    showTotalPoints.appendChild(pointsTotal);
  }
}

//==========================Render Game Links to Page=================================
function renderGameLinksToPage(){

  if(finalPointsFromStorage <= 5 ){
    if(finalPointsFromStorage !== null){
      var scoreMessage1 = document.getElementById('game-rec');
      var messageContent1 = document.createElement('p');
      messageContent1.textContent= 'Great job! You clearly know your stuff, but it\'s always good to learn more. Here are some articles that might interest you.';
      scoreMessage1.appendChild(messageContent1);
    }

    var gameList1 = document.getElementById('game-rec1');
    var gamelistContent1 = document.createElement('a');
    var scoreLink1 = document.createTextNode(goodScoreLinks[0].text);
    gamelistContent1.appendChild(scoreLink1);
    gamelistContent1.href = goodScoreLinks[0].link;
    gamelistContent1.target = '_blank',
    gameList1.appendChild(gamelistContent1);

    var gameList3 = document.getElementById('game-rec2');
    var gamelistContent3 = document.createElement('a');
    var scoreLink3 = document.createTextNode(goodScoreLinks[1].text);
    gamelistContent3.appendChild(scoreLink3);
    gamelistContent3.href = goodScoreLinks[1].link;
    gamelistContent3.target = '_blank',
    gameList3.appendChild(gamelistContent3);
  }
  if(finalPointsFromStorage > 5 && finalPointsFromStorage < 11){
    var scoreMessage2 = document.getElementById('game-rec');
    var messageContent2 = document.createElement('p');
    messageContent2.textContent= 'Not bad! But you might do better if you read these articles';
    scoreMessage2.appendChild(messageContent2);


    var gameList2 = document.getElementById('game-rec1');
    var gamelistContent2 = document.createElement('a');
    var scoreLink2 = document.createTextNode(goodScoreLinks[2].text);
    gamelistContent2.appendChild(scoreLink2);
    gamelistContent2.href = goodScoreLinks[2].link;
    gamelistContent2.target = '_blank',
    gameList2.appendChild(gamelistContent2);

    var gameList3 = document.getElementById('game-rec2');
    var gamelistContent3 = document.createElement('a');
    var scoreLink3 = document.createTextNode(badScoreLinks[0].text);
    gamelistContent3.appendChild(scoreLink3);
    gamelistContent3.href = badScoreLinks[0].link;
    gamelistContent3.target = '_blank',
    gameList3.appendChild(gamelistContent3);

    var gameList6 = document.getElementById('game-rec3');
    var gamelistContent6 = document.createElement('a');
    var scoreLink6 = document.createTextNode(badScoreLinks[1].text);
    gamelistContent6.appendChild(scoreLink6);
    gamelistContent6.href = badScoreLinks[1].link;
    gamelistContent6.target = '_blank',
    gameList6.appendChild(gamelistContent6);
  }
  if(finalPointsFromStorage > 10 ){
    var scoreMessage3 = document.getElementById('game-rec');
    var messageContent3 = document.createElement('p');
    messageContent3.textContent= 'Hmm, didn\'t do so hot.  But, if you read these articles, you\'ll do better next time!';
    scoreMessage3.appendChild(messageContent3);


    var gameList4 = document.getElementById('game-rec1');
    var gamelistContent4 = document.createElement('a');
    var scoreLink4 = document.createTextNode(goodScoreLinks[3].text);
    gamelistContent4.appendChild(scoreLink4);
    gamelistContent4.href = goodScoreLinks[3].link;
    gamelistContent4.target = '_blank',
    gameList4.appendChild(gamelistContent4);

    var gameList5 = document.getElementById('game-rec2');
    var gamelistContent5 = document.createElement('a');
    var scoreLink5 = document.createTextNode(badScoreLinks[0].text);
    gamelistContent5.appendChild(scoreLink5);
    gamelistContent5.href = badScoreLinks[0].link;
    gamelistContent5.target = '_blank',
    gameList5.appendChild(gamelistContent5);

    var gameList6 = document.getElementById('game-rec3');
    var gamelistContent6 = document.createElement('a');
    var scoreLink6 = document.createTextNode(badScoreLinks[1].text);
    gamelistContent6.appendChild(scoreLink6);
    gamelistContent6.href = badScoreLinks[1].link;
    gamelistContent6.target = '_blank',
    gameList6.appendChild(gamelistContent6);

    var gameList7 = document.getElementById('game-rec4');
    var gamelistContent7 = document.createElement('a');
    var scoreLink7 = document.createTextNode(badScoreLinks[2].text);
    gamelistContent7.appendChild(scoreLink7);
    gamelistContent7.href = badScoreLinks[2].link;
    gamelistContent7.target = '_blank',
    gameList7.appendChild(gamelistContent7);
  }
}
//==========================Render Input Links to Page=================================

function renderInputLinksToPage(){
  if(finalPointsFromStorage !== null){
    if(profileFromStorage.protests === false &&
    profileFromStorage.travel === false &&
    profileFromStorage.diningOut === false){

      var choiceMessage1 = document.getElementById('user-choice');
      var choiceMessageContent1 = document.createElement('p');
      choiceMessageContent1.textContent= 'You didn\' show interest in any of the topics on our form, but you might enjoy reading this article.';
      choiceMessage1.appendChild(choiceMessageContent1);

      var linksList = document.getElementById('user-choice1');
      var listContent = document.createElement('a');
      var choicesLink = document.createTextNode('Show Me the Science - Why Wash Your Hands?');
      listContent.appendChild(choicesLink);
      listContent.href = 'https://www.cdc.gov/handwashing/why-handwashing.html';//can make this access array of links when done
      listContent.target = '_blank',
      linksList.appendChild(listContent);
    }else{
      var choiceMessage = document.getElementById('user-choice');
      var choiceMessageContent = document.createElement('p');
      choiceMessageContent.textContent= 'Based on your interests, you might enjoy these articles.';
      choiceMessage.appendChild(choiceMessageContent);
    }
  }
  if(profileFromStorage.protests === true){
    var linksList1 = document.getElementById('user-choice1');
    var listContent1 = document.createElement('a');
    var choicesLink1 = document.createTextNode(protestLinks[0].text);
    listContent1.appendChild(choicesLink1);
    listContent1.href = protestLinks[0].link;//can make this access array of links when done
    listContent1.target = '_blank',
    linksList1.appendChild(listContent1);
  //figured out how to link from js at https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/ and how to make it open in a new tab at https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml#:~:text=How%20to%20Open%20Hyperlinks%20in,your%20links%20(anchor%20tags).&text=Now%20when%20your%20visitors%20click,how%20they%20configured%20that%20browser).
  }
  if(profileFromStorage.travel === true){
    var linksList2 = document.getElementById('user-choice2');
    var listContent2 = document.createElement('a');
    var choicesLink2 = document.createTextNode(diningLinks[0].text);
    listContent2.appendChild(choicesLink2);
    listContent2.href = diningLinks[0].link;//can make this access array of links when done
    listContent2.target = '_blank',
    linksList2.appendChild(listContent2);
  }
  if(profileFromStorage.diningOut === true){
    var linksList3 = document.getElementById('user-choice3');
    var listContent3 = document.createElement('a');
    var choicesLink3 = document.createTextNode(travelLinks[0].text);
    listContent3.appendChild(choicesLink3);
    listContent3.href = travelLinks[0].link;//can make this access array of links when done
    listContent3.target = '_blank',
    linksList3.appendChild(listContent3);
  }
}
//=======================Render Age Links to Page===================================
function renderAgeLinksToPage(){

  if(finalPointsFromStorage !== null){
    //TODO: insert if statement to have different content based on age
    if(profileFromStorage.age > '59'){
      var ageMessage = document.getElementById('user-age');
      var ageMessageContent = document.createElement('p');
      ageMessageContent.textContent= 'You\'re age places you in a high risk category, you might find this link helpful.';
      ageMessage.appendChild(ageMessageContent);
    } else{
      var ageMessage = document.getElementById('user-age');
      var ageMessageContent = document.createElement('p');
      ageMessageContent.textContent= 'Even though you\'re age doesn\'t place you in a high risk category, you still might find this link helpful.';
      ageMessage.appendChild(ageMessageContent);
    }
  }
  if(profileFromStorage.age > '59'){
    var ageList = document.getElementById('user-age1');
    var agelistContent = document.createElement('a');
    var ageLink = document.createTextNode('Risk for Severe Illness Increases with Age');
    agelistContent.appendChild(ageLink);
    agelistContent.href = 'https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/older-adults.html';
    agelistContent.target = '_blank',
    ageList.appendChild(agelistContent);
  } else{
    var ageList1 = document.getElementById('user-age1');
    var agelistContent1 = document.createElement('a');
    var ageLink1 = document.createTextNode('People of Any Age with Underlying Medical Conditions');
    agelistContent1.appendChild(ageLink1);
    agelistContent1.href = 'https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html';
    agelistContent1.target = '_blank',
    ageList1.appendChild(agelistContent1);
  }
}

//build a function to retrieve localstorage of points, put it in to a variable, and then clear local storage
function retrieveFinalScoreFromStorage (){
  var getFinalPointsFromStorage = localStorage.getItem('storedPoints');
  finalPointsFromStorage = JSON.parse(getFinalPointsFromStorage);
  localStorage.removeItem('storedPoints');
}
retrieveFinalScoreFromStorage();

//====================Before unload event=======================
//https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
window.addEventListener('beforeunload', ifUserLeaves);
function ifUserLeaves(event){
  // event.preventDefault();
  event.returnValue = 'If you leave or refresh this page, your results and some links will be lost. Do you wish to leave?';
}

//============================Function Calls===========================
renderResultsToPage();
renderGameLinksToPage();
renderInputLinksToPage();
renderAgeLinksToPage();


