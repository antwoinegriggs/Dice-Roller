// Retrieve dice-button from DOM
const diceRollButton = document.querySelector("#dice-button");

// Retrieve image-container from DOM
const diceContainer = document.querySelector("#image-container");

//Create calculation for each dice
const rollDiceOne = () => parseInt(Math.floor(Math.random() * 6) + 1);
const rollDiceTwo = () => parseInt(Math.floor(Math.random() * 6) + 1);

//Create image element for each dice
const createDiceImageOne = document.createElement("img");
const createDiceImageTwo = document.createElement("img");

//Create array to store dice images
const diceImageArray = [
  "./images/diceone.png",
  "./images/dicetwo.png",
  "./images/dicethree.png",
  "./images/dicefour.png",
  "./images/dicefive.png",
  "./images/dicesix.png",
];

//Create variable to store dice roll value
var rollOne = 0;
var rollTwo = 0;
var diceRollResult = 0

//Toggle animation for dice roll
const toggleShake = function (element) {
  // Animations only occur when a new class is added to the element
  if (element.classList.contains("shake1")) {
    element.classList.remove("shake1");
    element.classList.add("shake2");
  } else {
    element.classList.remove("shake2");
    element.classList.add("shake1");
  }
};

// Function to perform dice roll and assign value to variables
const renderDiceRollResult = () => {
  (rollOne = rollDiceOne()), (rollTwo = rollDiceTwo());
  return (diceRollResult = rollOne + rollTwo);
};

// Perform animation and render new dice image for dice one
const renderDiceOne = function () {
  
  toggleShake(createDiceImageOne);

  // Use switch statement to verify value and render image from array
  let index = rollOne - 1
  switch (rollOne) {
    case 0:
      createDiceImageOne.src = diceImageArray[rollOne];
      diceContainer.append(createDiceImageOne);
      break;
    case 1:
      createDiceImageOne.src = diceImageArray[index];
      diceContainer.append(createDiceImageOne);
      break;
    case 2:
      createDiceImageOne.src = diceImageArray[index];
      diceContainer.append(createDiceImageOne);
      break;
    case 3:
      createDiceImageOne.src = diceImageArray[index];
      diceContainer.append(createDiceImageOne);
      break;
    case 4:
      createDiceImageOne.src = diceImageArray[index];
      diceContainer.append(createDiceImageOne);
      break;
    case 5:
      createDiceImageOne.src = diceImageArray[index];
      diceContainer.append(createDiceImageOne);
      break;
    case 6:
      createDiceImageOne.src = diceImageArray[index];
      diceContainer.append(createDiceImageOne);
      break;

    default:
      break;
  }
};

// Perform animation and render new dice image for dice two
const renderDiceTwo = function () {
  toggleShake(createDiceImageTwo);

  // Use switch statement to verify value and render image from array
  let index = rollTwo - 1
  switch (rollTwo) {
    case 0:
      createDiceImageTwo.src = diceImageArray[rollTwo];
      diceContainer.append(createDiceImageTwo);
      break;
    case 1:
      createDiceImageTwo.src = diceImageArray[index];
      diceContainer.append(createDiceImageTwo);
      break;
    case 2:
      createDiceImageTwo.src = diceImageArray[index];
      diceContainer.append(createDiceImageTwo);
      break;
    case 3:
      createDiceImageTwo.src = diceImageArray[index];
      diceContainer.append(createDiceImageTwo);
      break;
    case 4:
      createDiceImageTwo.src = diceImageArray[index];
      diceContainer.append(createDiceImageTwo);
      break;
    case 5:
      createDiceImageTwo.src = diceImageArray[index];
      diceContainer.append(createDiceImageTwo);
      break;
    case 6:
      createDiceImageTwo.src = diceImageArray[index];
      diceContainer.append(createDiceImageTwo);
      break;

    default:
      break;
  }
};

// Button that will use functions to assign value and render results
diceRollButton.addEventListener("click", function () {
  renderDiceRollResult();
  renderDiceOne();
  renderDiceTwo();

  // Retrieve dice-result from DOM and render dice roll results via text
 document.querySelector("#dice-result").textContent = `You rolled a ${diceRollResult}!`
});

// Render dice on load
renderDiceOne();
renderDiceTwo();