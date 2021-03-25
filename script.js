// html elements

const rollButton = document.getElementById("Roll_btn");
const startBtn = document.getElementById("start_btn");
const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const dice3 = document.getElementById("dice-3");
const dice4 = document.getElementById("dice-4");

// game state variables
let rolling;

function init() {
  rolling = false;

  dice1.classList = "hidden";
  dice2.classList = "hidden";
  dice3.classList = "hidden";
  dice4.classList = "hidden";

  dice1.textContent = "";
  dice2.textContent = "";
  dice3.textContent = "";
  dice4.textContent = "";

  rollButton.textContent = "Roll Dice";
}

startBtn.addEventListener("click", init);

init();

// a number between 1 and 4
// const num = Math.trunc(Math.random() * 4) + 1;
// console.log(num);

// dice arrays
const diceArr1 = [
  "sk8dice!",
  "frontside",
  "backside",
  "frontside",
  "backside",
  "VARIATION",
];
const diceArr2 = [
  "SK8DICE!",
  "Kickflip",
  "Heelflip",
  "Kickflip",
  "Heelflip",
  "VARIATION",
];
const diceArr3 = ["SK8DICE!", "360°", "180°", "360°", "180°", "VARIATION"];
const diceArr4 = [
  "SK8DICE!",
  "Regular",
  "Fakie",
  "Regular",
  "Fakie",
  "VARIATION",
];

// element-specific images using if/else statements?
// trick-specific combinations using if/else statements?

rollButton.addEventListener("click", function () {
  rolling = true;

  if (rolling) {
    // stores each roll
    const rolls = [];

    // displays dice

    dice1.classList = "dice";
    dice2.classList = "dice";
    dice3.classList = "dice";
    dice4.classList = "dice";

    // 4 different numbers -- prevents same iteration
    const diceNum_1 = Math.trunc(Math.random() * 6);
    const diceNum_2 = Math.trunc(Math.random() * 6);
    const diceNum_3 = Math.trunc(Math.random() * 6);
    const diceNum_4 = Math.trunc(Math.random() * 6);

    // 4 dice, all pushed into 1 array
    rolls.push(diceArr1[diceNum_1].toLowerCase());
    rolls.push(diceArr2[diceNum_2].toLowerCase());
    rolls.push(diceArr3[diceNum_3].toLowerCase());
    rolls.push(diceArr4[diceNum_4].toLowerCase());

    // places text content within each element
    dice1.textContent = diceArr1[diceNum_1].toLowerCase();
    dice2.textContent = diceArr2[diceNum_2].toLowerCase();
    dice3.textContent = diceArr3[diceNum_3].toLowerCase();
    dice4.textContent = diceArr4[diceNum_4].toLowerCase();

    // changes text of Button
    rollButton.textContent = "Roll Again";

    // creates a space between each element
    console.log(rolls.join(" + "));
  } else {
    init();
  }
});
