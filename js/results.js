'use strict';
//this JS file will drive landing page and results page
//we will deal with the form on landing page, and store  local info
//retreive local storage, and then send that on the reslts page

//TODO: handle info from form submit
//TODO: save user info to local storage 
//TODO: landing page load signifies either new user or return user
// there is logic in bus mall app re knowing if something is in local storage or not yet

//we will need to access some of the things from app.js here 
// we're using the links constructor here to show results and links

var transferInfoToResultsPage = document.getElementById('user-input');//Maybe submit-user
transferInfoToResultsPage.addEventListener('submit', handleDataFromForm);//Is submit a valid action to listen to?

function handleDataFromForm (event){
  event.preventDefault();
  var playerName = event.target.name.value;
  var playerAge = event.target.age.value;
  var interests1 = event.target.interest1.checked;
  var interests2 = event.target.interest2.checked;
  var interests3 = event.target.interest3.checked;//nick helped us find this https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
  console.log('***', interests1, interests2, interests3);
}

