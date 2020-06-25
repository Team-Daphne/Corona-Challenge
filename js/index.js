'use strict';
//==========================AddEventLIstener============================
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

  personalWelcomeContainer.appendChild(personalWelcome);

  document.getElementById('start-challenge').style.display = 'block';
}


