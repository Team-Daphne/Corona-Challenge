'use strict';
//this JS file will drive landing page and results page
//we will deal with the form on landing page, and store  local info
//retreive local storage, and then send that on the reslts page

//TODO:************ handle info from form submit
//TODO:************ save user info to local storage

//TODO: Stretch: landing page load signifies either new user or return user
// there is logic in bus mall app re knowing if something is in local storage or not yet

//we will need to access some of the things from app.js here
// we're using the links constructor here to show results and links

// var getProfileFromStorage = localStorage.getItem('storedProfile');
// var profileFromStorage = JSON.parse(getProfileFromStorage);


// debugger;

// TODO:********** create an object or object contructor for userProfile
var finalPointsFromStorage;

//==========================Render Results to Page==========================
function renderResultsToPage(){
  var showTotalPoints = document.getElementById('point-results');
  var pointsTotal = document.createElement('p');
  // pointsTotal.textContent = 'Your score was: ' + totalPoints;
  pointsTotal.textContent = 'Your score was: ' + finalPointsFromStorage;
  showTotalPoints.appendChild(pointsTotal);
}

//==========================Render Input Links to Page=================================

function renderInputLinksToPage(){
  
  // if(profileFromStorage.protests === true){
    
    var linksList = document.getElementById('user-choice');
    var listContent = document.createElement('a');
    var choicesLink = document.createTextNode(gatheringLink.text);
    listContent.appendChild(choicesLink);
    listContent.href = gatheringLink.link;//can make this access array of links when done
    listContent.target = '_blank',
    linksList.appendChild(listContent);
    //figured out how to link from js at https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/ and how to make it open in a new tab at https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml#:~:text=How%20to%20Open%20Hyperlinks%20in,your%20links%20(anchor%20tags).&text=Now%20when%20your%20visitors%20click,how%20they%20configured%20that%20browser).
    // }
  
}

//==========================Render Game Links to Page=================================
function renderGameLinksToPage(){
  var linksList = document.getElementById('game-rec');
  var listContent = document.createElement('a');
  var choicesLink = document.createTextNode('Handwashing Link');
  listContent.appendChild(choicesLink);
  listContent.href = handwashingLink.link;
  listContent.target = '_blank',
  linksList.appendChild(listContent);
}

//build a function to retrieve localstorage of points, put it in to a variable, and then clear local storage
function retrieveFinalScoreFromStorage (){
  var getFinalPointsFromStorage = localStorage.getItem('storedPoints');
  finalPointsFromStorage = JSON.parse(getFinalPointsFromStorage);
  localStorage.removeItem('storedPoints');
}
retrieveFinalScoreFromStorage();



//============================Function Calls===========================
renderResultsToPage();
renderInputLinksToPage();
renderGameLinksToPage();//For some reason, if these calls are at the bottom, they won't render. If they are at the top, local storage wont gather



