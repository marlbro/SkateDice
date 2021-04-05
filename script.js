// html elements
const rollBtn = document.getElementById("Roll_btn");
const startBtn = document.getElementById("start_btn");

const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const dice3 = document.getElementById("dice-3");
const dice4 = document.getElementById("dice-4");

const allDice = document.querySelector(".dice");
const skateLog = document.querySelector(".SkateLog");

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

  rollBtn.textContent = "Roll Dice";
  startBtn.style.display = "none";
  skateLog.style.display = "none";
  skateLog.textContent = "";
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

rollBtn.addEventListener("click", function () {
  rolling = true;

  if ((rolling = true)) {
    // stores each roll
    const rolls = [];

    // 4 different numbers -- prevents same iteration?
    const diceNum_1 = Math.trunc(Math.random() * 6);
    const diceNum_2 = Math.trunc(Math.random() * 6);
    const diceNum_3 = Math.trunc(Math.random() * 6);
    const diceNum_4 = Math.trunc(Math.random() * 6);

    ////// this code executes a few seconds after page is loaded
    setTimeout(() => {
      rollBtn.textContent = "Next Roll";
      rollBtn.style.color = "";

      // places text content within each element
      dice1.textContent = diceArr1[diceNum_1].toLowerCase();
      dice2.textContent = diceArr2[diceNum_2].toLowerCase();
      dice3.textContent = diceArr3[diceNum_3].toLowerCase();
      dice4.textContent = diceArr4[diceNum_4].toLowerCase();

      // shuffle dice index
      function shuffle(arr) {
        var currentIndex = rolls.length,
          tempValue,
          randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.trunc(Math.random() * currentIndex);
          currentIndex -= 1;

          // swap
          tempValue = rolls[currentIndex];
          rolls[currentIndex] = rolls[randomIndex];
          rolls[randomIndex] = tempValue;
        }
        return arr;
      }

      shuffle(rolls);

      // displays Roll Log and logs to console
      skateLog.style.display = "block";
      console.log(rolls.join(" + "));

      // displays each roll in textarea box
      const keepRolling = function (num) {
        const skateRoll = rolls.join(" + ");
        num = "";

        num = num + skateRoll;
        rolls.push(num);

        skateLog.textContent = `${num}`;
      };

      console.log(rolls);

      keepRolling();
    }, 1200);
    ///////

    // displays dice BEFORE roll..
    dice1.classList = "dice";
    dice2.classList = "dice";
    dice3.classList = "dice";
    dice4.classList = "dice";

    // .. with rolling the dice
    dice1.textContent = "..rolling";
    dice2.textContent = "the";
    dice3.textContent = "sk8";
    dice4.textContent = "dice..";

    // 4 seperate dice pushed into Rolls arr
    rolls.push(diceArr1[diceNum_1].toLowerCase());
    rolls.push(diceArr2[diceNum_2].toLowerCase());
    rolls.push(diceArr3[diceNum_3].toLowerCase());
    rolls.push(diceArr4[diceNum_4].toLowerCase());

    rollBtn.textContent = "Rolling...";
    rollBtn.style.color = "Yellow";

    startBtn.style.display = "none";
    skateLog.style.display = "block";

    // displays Clear Dice
    startBtn.style.display = "";

    console.log(`Rolling...`);
  } else {
    init();
  }
});
