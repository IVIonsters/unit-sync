// Main Variables
let input = document.getElementById('user-input');
let convertBtn = document.getElementById('convert-btn');

// Add event listener to the convert button
convertBtn.addEventListener('click', function () {
  let user = userInput();
  meterToFeet(user);
  litersToGallon(user);
  kilogramToPounds(user);
});

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
    let feet = parseFloat((user * 3.28084).toFixed(3));
    let meter = parseFloat((user * 0.3048).toFixed(3));
    console.log(user + " meters is equal to " + feet + " feet");
    meterDisplayResult(user + " meters = " + feet + " feet | " + user + " feet = " + meter + " meters");
  }
}

// Function to display result in the DOM
function meterDisplayResult(meterMessage) {
  const meterContainer = document.getElementById('meter');
  meterContainer.textContent = meterMessage;
}

// liters to gallons
function litersToGallon(user) {
  if (user !== null) {
    let gallon = parseFloat((user * 0.264172).toFixed(3));
    let liter = parseFloat((user * 3.78541).toFixed(3));
    console.log(user + " liters is equal to " + gallon + " gallons");
    literDisplayResult(user + " liters = " + gallon + " gallons | " + user + " gallons = " + liter + " liters");
  }
}

// Function to display result in the DOM
function literDisplayResult(literMessage) {
  const literContainer = document.getElementById('liter');
  literContainer.textContent = literMessage;
}

// kilogram to pounds
function kilogramToPounds(user) {
  if (user !== null) {
    let pound = parseFloat((user * 2.20462).toFixed(3));
    let kilogram = parseFloat((user * 0.453592).toFixed(3));
    console.log(user + " kilograms is equal to " + pound + " pounds");
    kilogramDisplayResult(user + " kilograms = " + pound + " pounds | " + user + " pounds = " + kilogram + " kilograms");
  }
}

// Function to display result in the DOM 
function kilogramDisplayResult(kilogramMessage) {
  const kilogramContainer = document.getElementById('kilogram');
  kilogramContainer.textContent = kilogramMessage;
}

