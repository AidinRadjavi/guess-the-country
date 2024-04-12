// Result page.
//--------------------------------------------------------------------------------------------------------------------------------------------------
// // querySelectors that needs to be imported from HTML file.

const correctGuessCounter = document.querySelector("#correctCounter");
const resultMsg = document.querySelector("#result");
const resetBtn = document.querySelector("#resetBtn");
const resultsBtn = document.querySelector("#resultsBtn");
const resultImageSrc = [{ id: 1, name: "result", image: "results.jpg" }];

const reset = document.querySelector("#resetBtn");

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Clickcount function for resultpage to display amount of countries guessed on.

let howManyGuessCounter = 0;

optionAll.addEventListener("click", (e) => {
  howManyGuesses();
});

function howManyGuesses() {
  howManyGuessCounter++;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Clickcount function to count all correct answers

let correctCountryCounter = 0;

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Functions that compare to see if correct button is clicked

function correctCountryOne() {
  if (selectedCountry.name === countryOne) {
    correctCountryCounter++;
    correctGuessCounter.innerText = `Antal rätt: ${correctCountryCounter}`;
    correctGuessCounter.className = "badge text-bg-success p-3";
  } else {
    correctGuessCounter.className = "badge text-bg-danger p-3";
  }
}

function correctCountryTwo() {
  if (selectedCountry.name === countryTwo) {
    correctCountryCounter++;
    correctGuessCounter.innerText = `Antal rätt: ${correctCountryCounter}`;
    correctGuessCounter.className = "badge text-bg-success p-3";
  } else {
    correctGuessCounter.className = "badge text-bg-danger p-3";
  }
}

function correctCountryThree() {
  if (selectedCountry.name === countryThree) {
    correctCountryCounter++;
    correctGuessCounter.innerText = `Antal rätt: ${correctCountryCounter}`;
    correctGuessCounter.className = "badge text-bg-success p-3";
  } else {
    correctGuessCounter.className = "badge text-bg-danger p-3";
  }
}

function correctCountryFour() {
  if (selectedCountry.name === countryFour) {
    correctCountryCounter++;
    correctGuessCounter.innerText = `Antal rätt: ${correctCountryCounter}`;
    correctGuessCounter.className = "badge text-bg-success p-3";
  } else {
    correctGuessCounter.className = "badge text-bg-danger p-3";
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Eventlistener to display results on results page.

resultsBtn.addEventListener("click", (e) => {
  resultMsg.style.display = "block";
  resultMsg.innerText = `Du hade rätt på ${correctCountryCounter} utav ${
    clickCount - 1
  } gissningar!`;
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Function and eventlistener for the reset button on the result page.

function reloadGame() {
  location.reload(true);
}

reset.addEventListener("click", (e) => {
  reloadGame();
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
