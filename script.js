// html elements
const rollButton = document.getElementById("Roll_btn");
const startBtn = document.getElementById("start_btn");
const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const dice3 = document.getElementById("dice-3");
const dice4 = document.getElementById("dice-4");

const allDice = document.querySelector(".dice");

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
  startBtn.style.display = "none";
}

startBtn.addEventListener("click", init);

init();

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
  init();

  rolling = true;

  if ((rolling = true)) {
    // stores each roll
    const rolls = [];

    // 4 different numbers -- prevents same iteration
    const diceNum_1 = Math.trunc(Math.random() * 6);
    const diceNum_2 = Math.trunc(Math.random() * 6);
    const diceNum_3 = Math.trunc(Math.random() * 6);
    const diceNum_4 = Math.trunc(Math.random() * 6);

    setTimeout(() => {
      // displays dice
      dice1.classList = "dice";
      dice2.classList = "dice";
      dice3.classList = "dice";
      dice4.classList = "dice";

      // places text content within each element
      dice1.textContent = diceArr1[diceNum_1].toLowerCase();
      dice2.textContent = diceArr2[diceNum_2].toLowerCase();
      dice3.textContent = diceArr3[diceNum_3].toLowerCase();
      dice4.textContent = diceArr4[diceNum_4].toLowerCase();

      // changes text of Button
      rollButton.textContent = "Roll Again";
      rollButton.style.color = "";
      startBtn.style.display = "";

      // displays text in console
      console.log(rolls.join(" + "));
    }, 1200);

    // 4 dice, all pushed into 1 array
    rolls.push(diceArr1[diceNum_1].toLowerCase());
    rolls.push(diceArr2[diceNum_2].toLowerCase());
    rolls.push(diceArr3[diceNum_3].toLowerCase());
    rolls.push(diceArr4[diceNum_4].toLowerCase());

    rollButton.textContent = "Rolling..";
    rollButton.style.color = "Yellow";
    startBtn.style.display = "";

    console.log(`Rolling dice...`);

    // creates a space between each element
  } else {
    init();
  }
});
