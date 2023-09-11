// Select the screen element and buttons
const screen = document.getElementById("output");
const buttons = document.querySelectorAll(".btn");

let buffer = "0";

// Function to handle button clicks
function handleButtonClick(event, buttonText) {
  const button = event.target;

  if ("0123456789".includes(buttonText)) {
    // Button is a number
    appendToScreen(buttonText);
  } else if ("+-*/".includes(buttonText)) {
    // Button is an operator
    appendToScreen(buttonText);
  } else if (buttonText === "=") {
    // Button is the equals sign
    calculate();
  } else if (buttonText === "C") {
    // Button is the clear button
    clearScreen();
  } else if (buttonText === "sqr") {
    // Button is the square operator
    square();
  }
  if (buttonText === "sqrt") {
    //button is the square root operator
    squareRoot();
  } else if (buttonText === "cubic") {
    // button is the cubic root operator
    cubicRoot();
  } else if (buttonText === "delete") {
    // button is the delete operator
    deleteText();
  }
  if (buttonText === "power") {
    // The button is for exponentiation (power)
    calculatePower();
  }
}

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonText = button.getAttribute("data-value");
    handleButtonClick(event, buttonText); // Pass both event and buttonText
  });
});

// Rest of your code (clearScreen, appendToScreen, calculate functions)

// Rest of your code for clearScreen, appendToScreen, and calculate functions
function clearScreen() {
  buffer = "0";
  screen.innerText = buffer;
}

function appendToScreen(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
  screen.innerText = buffer;
}

function calculate() {
  try {
    buffer = eval(buffer);
    screen.innerText = buffer;
  } catch (error) {
    screen.innerText = "Error";
    buffer = "0";
  }
}

function square() {
  buffer = Math.pow(parseFloat(buffer), 2).toString();
  screen.innerText = buffer;
}

function squareRoot() {
  try {
    buffer = Math.sqrt(parseFloat(buffer)).toString();
    screen.innerText = buffer;
  } catch (error) {
    screen.innerText = "Error";
    buffer = "0";
  }
}

function cubicRoot() {
  try {
    buffer = Math.cbrt(parseFloat(buffer)).toString();
    screen.innerText = buffer;
  } catch (error) {
    screen.innerText = "Error";
    buffer = "0";
  }
}

function deleteText() {
  buffer = screen.innerText.slice(0, -1);
  screen.innerText = buffer;
  if (buffer === "") {
    screen.innerText = "0";
  }
}

// Add a new function to handle exponentiation
function calculatePower() {
  try {
    // Prompt the user for the exponent value
    const exponent = parseFloat(prompt("Enter the exponent:"));
    if (!isNaN(exponent)) {
      buffer = Math.pow(parseFloat(buffer), exponent).toString();
      screen.innerText = buffer;
    } else {
      // Handle invalid input for the exponent
      screen.innerText = "Invalid exponent";
      buffer = "0";
    }
  } catch (error) {
    screen.innerText = "Error";
    buffer = "0";
  }
}
