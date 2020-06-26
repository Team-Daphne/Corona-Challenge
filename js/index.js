'use strict';
//==========================Add EventListener============================
function listenForSubmit(){
  var transferInfoToResultsPage = document.getElementById('user-input');
  transferInfoToResultsPage.addEventListener('submit', handleDataFromForm);
}
listenForSubmit();


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
  document.getElementById('submit-user').style.display = 'none';
  document.getElementById('user-input').style.display = 'none';

  var personalWelcomeContainer = document.getElementById('user-form');
  var personalWelcome = document.createElement('p');
  personalWelcome.textContent = 'Welcome, ' + playerName + '! Are you ready to test your knowledge?';

  personalWelcome.style.fontSize = '20px';
  personalWelcomeContainer.appendChild(personalWelcome);

  document.getElementById('start-challenge').style.display = 'block';
}
//===============personal welcome back using local storage==============
//could make this code dryer with above code
var getProfileFromStorage = localStorage.getItem('storedProfile');
var profileFromStorage = JSON.parse(getProfileFromStorage);
function personalWelcomeBack(){
  var playerName = profileFromStorage.name;
  document.getElementById('submit-user').style.display = 'none';
  document.getElementById('user-input').style.display = 'none';

  var personalWelcomeContainer = document.getElementById('user-form');
  var personalWelcome = document.createElement('p');
  personalWelcome.textContent = 'Welcome back, ' + playerName + '! Would you like to play again?';

  personalWelcome.style.fontSize = '20px';
  personalWelcomeContainer.appendChild(personalWelcome);

  document.getElementById('start-challenge').style.display = 'block';
}

//============test reset profile button=====================
function makeClearUserProfileButton() {
  var clearUserProfileButtonHolder = document.getElementById('clear-user-profile-button-holder');
  var clearUserProfileButton = document.createElement('button');
  clearUserProfileButton.type = 'click';
  clearUserProfileButton.onclick = clearUserProfileFromStorage;
  clearUserProfileButton.style.height = '30px';
  clearUserProfileButton.textContent = 'Reset User Profile';
  clearUserProfileButtonHolder.appendChild(clearUserProfileButton);
}

function clearUserProfileFromStorage (){
  localStorage.removeItem('storedProfile');
  location.reload();
}

//=================if local storage exists, render personal greeting====
if (profileFromStorage !==null){
  personalWelcomeBack();
  makeClearUserProfileButton();
}
