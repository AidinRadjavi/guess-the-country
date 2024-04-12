// Starting page.
//--------------------------------------------------------------------------------------------------------------------------------------------------
// querySelectors that needs to be imported from HTML file.

const choice = document.querySelector("#guessBtn");
const five = document.querySelector("#five");
const ten = document.querySelector("#ten");
const twenty = document.querySelector("#twenty");
const all = document.querySelector("#all");

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Clickcounter for different functions.

let clickCount = 0;

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Eventlistener for every option buttons.

five.addEventListener("click", (e) => {
  fiveGuess();
});

ten.addEventListener("click", (e) => {
  tenGuess();
});

twenty.addEventListener("click", (e) => {
  twentyGuess();
});

all.addEventListener("click", (e) => {
  allGuess();
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Function for running the same kod in all guess amount choices.

function optionsGuess() {
  clickCount++;
  if (clickCount === 1) {
    five.remove();
    ten.remove();
    twenty.remove();
    all.remove();
    randomCountry();
    correctGuessCounter.style.display = "block";
    optionOne.style.display = "block";
    optionTwo.style.display = "block";
    optionThree.style.display = "block";
    optionFour.style.display = "block";
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Functions for start of game depending on which choice.

// Guess on 5 countries function with event listeners.

function fiveGuess() {
  optionsGuess();

  one.addEventListener("click", (e) => {
    correctCountryOne();
    fiveCountries();
  });

  two.addEventListener("click", (e) => {
    correctCountryTwo();
    fiveCountries();
  });

  three.addEventListener("click", (e) => {
    correctCountryThree();
    fiveCountries();
  });

  four.addEventListener("click", (e) => {
    correctCountryFour();
    fiveCountries();
  });
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Guess on 10 countries function with event listeners.

function tenGuess() {
  optionsGuess();

  one.addEventListener("click", (e) => {
    correctCountryOne();
    tenCountries();
  });

  two.addEventListener("click", (e) => {
    correctCountryTwo();
    tenCountries();
  });

  three.addEventListener("click", (e) => {
    correctCountryThree();
    tenCountries();
  });

  four.addEventListener("click", (e) => {
    correctCountryFour();
    tenCountries();
  });
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Guess on 20 countries function with event listeners.

function twentyGuess() {
  optionsGuess();

  one.addEventListener("click", (e) => {
    correctCountryOne();
    twentyCountries();
  });

  two.addEventListener("click", (e) => {
    correctCountryTwo();
    twentyCountries();
  });

  three.addEventListener("click", (e) => {
    correctCountryThree();
    twentyCountries();
  });

  four.addEventListener("click", (e) => {
    correctCountryFour();
    twentyCountries();
  });
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Guess on all countries function with event listeners.

function allGuess() {
  optionsGuess();

  one.addEventListener("click", (e) => {
    correctCountryOne();
    allCountries();
  });

  two.addEventListener("click", (e) => {
    correctCountryTwo();
    allCountries();
  });

  three.addEventListener("click", (e) => {
    correctCountryThree();
    allCountries();
  });

  four.addEventListener("click", (e) => {
    correctCountryFour();
    allCountries();
  });
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
