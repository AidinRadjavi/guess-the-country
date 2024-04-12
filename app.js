// Game page.
//--------------------------------------------------------------------------------------------------------------------------------------------------
// querySelectors that needs to be imported from HTML file.

const image = document.querySelector("#image");
const optionAll = document.querySelector("#optionBtn");
const optionOne = document.querySelector("#one");
const optionTwo = document.querySelector("#two");
const optionThree = document.querySelector("#three");
const optionFour = document.querySelector("#four");

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Arrays and variables that are used outside of functions.

let usedCountryId = [];
const countryCopy = [...europeanCountries];

let countryOne = null;
let countryTwo = null;
let countryThree = null;
let countryFour = null;

let nameAnswer = null;
let selectedCountry = shuffleNewCountry();
let randomizedAnswer = [];

//--------------------------------------------------------------------------------------------------------------------------------------------------
// function to randomize a country.

function randomCountry() {
  if (countryCopy.length === 0) {
    return;
  }

  while (usedCountryId.includes(selectedCountry.id)) {
    selectedCountry = shuffleNewCountry();
  }

  usedCountryId.push(selectedCountry.id);

  // This shuffler is for the temporary array with all countries that are not chosen.
  function shuffleArray(allCountriesExceptSelectedCountry) {
    for (var i = allCountriesExceptSelectedCountry.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = allCountriesExceptSelectedCountry[i];
      allCountriesExceptSelectedCountry[i] =
        allCountriesExceptSelectedCountry[j];
      allCountriesExceptSelectedCountry[j] = temp;
    }
  }

  // This filters out and creates a temp array that resets every time the function is run so same country does not appear twice.
  let allCountriesExceptSelectedCountry = countryCopy.filter(
    (country) => country.id !== selectedCountry.id
  );

  shuffleArray(allCountriesExceptSelectedCountry);

  let newCountryNameOne = allCountriesExceptSelectedCountry[0];
  let newCountryNameTwo = allCountriesExceptSelectedCountry[1];
  let newCountryNameThree = allCountriesExceptSelectedCountry[2];

  nameAnswer = [
    selectedCountry.name,
    newCountryNameOne.name,
    newCountryNameTwo.name,
    newCountryNameThree.name,
  ];

  let randomizedAnswer = randomBtnOrder(nameAnswer);

  //This renders the names on the buttons and the last row renders the image of the country flag.
  optionOne.innerText = `${randomizedAnswer[0]}`;
  optionTwo.innerText = `${randomizedAnswer[1]}`;
  optionThree.innerText = `${randomizedAnswer[2]}`;
  optionFour.innerText = `${randomizedAnswer[3]}`;
  image.src = selectedCountry.image;

  countryOne = randomizedAnswer[0];
  countryTwo = randomizedAnswer[1];
  countryThree = randomizedAnswer[2];
  countryFour = randomizedAnswer[3];
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Function to randomize another country and also checking so that the same country does not appear.

function shuffleNewCountry() {
  let notUsedCountries = countryCopy.filter(function (countryCopy) {
    return !usedCountryId.includes(countryCopy.id);
  });

  if (notUsedCountries.length === 0) {
    usedCountryId = [];
    notUsedCountries = countryCopy.slice();
  }

  let randomIndexNumber = Math.floor(Math.random() * notUsedCountries.length);
  return notUsedCountries[randomIndexNumber];
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Function to shuffle the order that the countries render on the buttons.

function randomBtnOrder(answerAlternative) {
  return answerAlternative
    .map(function (alternative) {
      return { value: alternative, sort: Math.random() };
    })
    .sort(function (a, b) {
      return a.sort - b.sort;
    })
    .map(function (alternative) {
      return alternative.value;
    });
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Function used in the end of the game to delete choice buttons and render the result and reset button.

function guessGame() {
  optionOne.remove();
  optionTwo.remove();
  optionThree.remove();
  optionFour.remove();
  image.src = resultImageSrc[0].image;
  resetBtn.style.display = "block";
  resultsBtn.style.display = "block";
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// Functions for every choice in the game.

function fiveCountries() {
  clickCount++;
  if (clickCount < 6) {
    randomCountry();
  }
  if (clickCount === 6) {
    guessGame();
  }
}

function tenCountries() {
  clickCount++;
  if (clickCount < 11) {
    randomCountry();
  }
  if (clickCount === 11) {
    guessGame();
  }
}

function twentyCountries() {
  clickCount++;
  if (clickCount < 21) {
    randomCountry();
  }
  if (clickCount === 21) {
    guessGame();
  }
}

function allCountries() {
  clickCount++;
  if (clickCount < countryCopy.length + 1) {
    randomCountry();
  }
  if (clickCount === countryCopy.length + 1) {
    guessGame();
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
