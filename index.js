// Main Variables
let input = document.getElementById('user-input');
let convertBtn = document.getElementById('convert-btn');

// Grab user input from input box when convert button is clicked
function userInput() {
  let user = Number(input.value);
  // Check if user input is a number
  if (!isNaN(user)) {
    console.log("User input is " + user + " and is a " + typeof user);
    return user;
  } else {
    alert('Please enter a number');
    return null;
  }
}

// Function to convert meters to feet
function meterToFeet(user) {
  if (user !== null) {
    let feet = user * 3.28084;
    console.log(user + " meters is equal to " + feet + " feet");
    displayResult(user + " meters is equal to " + feet + " feet");
  }
}

// Function to display result in the DOM
function displayResult(message) {
  const resultContainer = document.getElementById('result');
  resultContainer.textContent = message;
}

// Add event listener to the convert button
convertBtn.addEventListener('click', function () {
  let user = userInput();
  meterToFeet(user);
});

// liters to gallons
function litersToGallon() {

}

// kilogram to pounds
function kilogramToPounds() {

}

// render to various p tags in the html file