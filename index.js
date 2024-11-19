// Main Variables
let input = document.getElementById('user-input');
let convertBtn = document.getElementById('convert-btn');

// Grab user input from input box when convert button is clicked
function userInput() {
  let user = Number(input.value);
  //add if statement to check if user input is a number
  if (!isNaN(user)) {
    console.log("User input is " + user + " and is a " + typeof user);
  } else {
    alert('Please enter a number');
  }
}
convertBtn.addEventListener('click', userInput);

//functions to converter user input from metric to imperial


// Meter to Feet


// liters to gallons


// kilogram to pounds


// render to various p tags in the html file