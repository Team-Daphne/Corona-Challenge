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
//============================Function Calls===========================
renderResultsToPage();
renderGameLinksToPage();
renderInputLinksToPage();//For some reason, if these calls are at the bottom, they won't render. If they are at the top, local storage wont gather

var getProfileFromStorage = localStorage.getItem('storedProfile');
var profileFromStorage = JSON.parse(getProfileFromStorage);

//=============================User Contructor======================
function User(name, age, protests, travel, diningOut){
  this.name = name;
  this.age = age;
  this.protests = protests;
  this.travel = travel;
  this.diningOut = diningOut;
}

//==========================AddEventLIstener============================
var transferInfoToResultsPage = document.getElementById('user-input');
transferInfoToResultsPage.addEventListener('submit', handleDataFromForm);
// TODO:********** create an object or object contructor for userProfile

//=========================Callback Function======================
function handleDataFromForm (event){
  event.preventDefault();
  var playerName = event.target.name.value;
  var playerAge = event.target.age.value;
  var protests = event.target.interest1.checked;//later, if protests === true, give links on protests
  var travel = event.target.interest2.checked;
  var diningOut = event.target.interest3.checked;//nick helped us find this at https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
  console.log('***', protests, travel, diningOut);
  
  var userProfile = new User(playerName, playerAge, protests, travel, diningOut);
  var userProfileStringified = JSON.stringify(userProfile);
  localStorage.setItem('storedProfile', userProfileStringified);
  document.getElementById('user-input').reset();//this clears form and may not be required
}
//==========================Render Results to Page==========================
function renderResultsToPage(){
  var showTotalPoints = document.getElementById('point-results');
  var pointsTotal = document.createElement('p');
  pointsTotal.textContent = 'Your score was: ' + totalPoints;
  showTotalPoints.appendChild(pointsTotal);
}

//==========================Render Input Links to Page=================================

function renderInputLinksToPage(){
  
  // if(profileFromStorage.protests === true){
    
    var linksList = document.getElementById('user-choice');
    var listContent = document.createElement('a');
    var choicesLink = document.createTextNode('Gatherings Link');
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
  
  
  
  
  
  
  
  