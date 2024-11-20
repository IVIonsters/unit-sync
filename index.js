// Main Variables
let input = document.getElementById('user-input');
let convertBtn = document.getElementById('convert-btn');

// Add event listener to the convert button
convertBtn.addEventListener('click', function () {
  let user = userInput();
  if (user !== null) {
    meterToFeet(user);
    litersToGallon(user);
    kilogramToPounds(user);
  }
});

function userInput() {
  let user = Number(input.value);
  // Check if user input is a number
  if (!isNaN(user) && user > 0) {
    console.log("User input is " + user + " and is a " + typeof user);
    return user;
  } else {
    alert('Please enter a valid positive number');
    return null;
  }
}

// Function to convert meters to feet
function meterToFeet(user) {
  let feet = parseFloat((user * 3.28084).toFixed(3));
  let meter = parseFloat((user * 0.3048).toFixed(3));
  console.log(user + " meters is equal to " + feet + " feet");
  displayResult('meter', `${user} meters = ${feet} feet | ${user} feet = ${meter} meters`);
}

// Function to convert liters to gallons
function litersToGallon(user) {
  let gallon = parseFloat((user * 0.264172).toFixed(3));
  let liter = parseFloat((user * 3.78541).toFixed(3));
  console.log(user + " liters is equal to " + gallon + " gallons");
  displayResult('liter', `${user} liters = ${gallon} gallons | ${user} gallons = ${liter} liters`);
}

// Function to convert kilograms to pounds
function kilogramToPounds(user) {
  let pound = parseFloat((user * 2.20462).toFixed(3));
  let kilogram = parseFloat((user * 0.453592).toFixed(3));
  console.log(user + " kilograms is equal to " + pound + " pounds");
  displayResult('kilogram', `${user} kilograms = ${pound} pounds | ${user} pounds = ${kilogram} kilograms`);
}

// Function to display result in the DOM
function displayResult(id, message) {
  const container = document.getElementById(id);
  container.textContent = message;
}

