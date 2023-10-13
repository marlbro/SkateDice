// html elements
const rollBtn = document.getElementById("Roll_btn");
const startClearBtn = document.getElementById("startClear_btn");
const dice1 = document.getElementById("dice-1");
const dice2 = document.getElementById("dice-2");
const dice3 = document.getElementById("dice-3");
const dice4 = document.getElementById("dice-4");

const allDice = document.querySelector(".dice");
const skateLog = document.querySelector(".SkateLog");
const titlebar = document.querySelector(".titlebar");

// game state variables
let rolling, round, roll;

function init() {
  rolling = false;
  round = 1;

  dice1.classList = "hidden";
  dice2.classList = "hidden";
  dice3.classList = "hidden";
  dice4.classList = "hidden";

  dice1.textContent = "";
  dice2.textContent = "";
  dice3.textContent = "";
  dice4.textContent = "";

  rollBtn.textContent = "Roll Dice";
  rollBtn.style.color = "";

  startClearBtn.style.display = "none";

  skateLog.style.display = "none";
  skateLog.textContent = "";
  titlebar.textContent = "";

  clearTimeout(roll, 3000); // 3 seconds to stop roll
}

startClearBtn.addEventListener("click", init);

init();

// dice arrays
const diceArr1 = [
  "SK8DICE!",
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
  "Switch",
  "Nollie",
  "VARIATION",
];

rollBtn.addEventListener("click", function () {
  rolling = true;

  if ((rolling = true)) {
    // stores each roll
    const rolls = [];

    // all rolls logged?
    const sum = [];
    const roundNum = round++;

    // 4 different numbers -- prevents same iteration?
    const diceNum_1 = Math.trunc(Math.random() * 6);
    const diceNum_2 = Math.trunc(Math.random() * 6);
    const diceNum_3 = Math.trunc(Math.random() * 6);
    const diceNum_4 = Math.trunc(Math.random() * 6);

    ////// this code executes a few seconds after page is loaded
    roll = setTimeout(() => {
      rollBtn.textContent = "Next Roll";
      rollBtn.style.color = "";
      skateLog.style.display = "block";

      //
      dice1.style.background = "rgb(228, 34, 0)";
      dice2.style.background = "rgb(228, 34, 0)";
      dice3.style.background = "rgb(228, 34, 0)";
      dice4.style.background = "rgb(228, 34, 0)";

      // places text content within each element
      dice1.textContent = diceArr1[diceNum_1].toLowerCase();
      dice2.textContent = diceArr2[diceNum_2].toLowerCase();
      dice3.textContent = diceArr3[diceNum_3].toLowerCase();
      dice4.textContent = diceArr4[diceNum_4].toLowerCase();

      // shuffle dice index ( stackoverflow :( )
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

          // log
          titlebar.textContent = "Roll #" + `${roundNum}`;

          // sum.push(rolls);
        }
        return arr;
      }

      shuffle(rolls);

      // displays Roll Log and logs to console
      skateLog.style.display = "block";
      skateLog.style.alignitems = "center";

      console.log(rolls.join(" + "));

      // displays each roll in textarea box????
      const keepRolling = function (num) {
        // main log committed to mem
        const log = [];

        // each roll stored
        const skateRoll = rolls.join(" + ");

        // empty string // for the text box
        num = "";
        log.push(num + skateRoll);

        skateLog.insertAdjacentText = "li";
        skateLog.textContent += " " + `${log}`;
      };

      // console.log(rolls);

      keepRolling();
    }, 1200);

    // displays dice BEFORE roll..
    dice1.classList = "dice";
    dice2.classList = "dice";
    dice3.classList = "dice";
    dice4.classList = "dice";

    // .. with rolling the dice
    dice1.textContent = "..rolling..";
    dice2.textContent = "..the..";
    dice3.textContent = "..sk8..";
    dice4.textContent = "..dice..";

    // 4 seperate dice pushed into Rolls arr
    rolls.push(diceArr1[diceNum_1].toLowerCase());
    rolls.push(diceArr2[diceNum_2].toLowerCase());
    rolls.push(diceArr3[diceNum_3].toLowerCase());
    rolls.push(diceArr4[diceNum_4].toLowerCase());

    rollBtn.textContent = "Rolling..";
    rollBtn.style.color = "Yellow";

    startClearBtn.style.display = "none";
    // skateLog.style.display = "block";

    dice1.style.background = "white";
    dice2.style.background = "white";
    dice3.style.background = "white";
    dice4.style.background = "white";

    // displays Clear Dice
    startClearBtn.style.display = "";

    console.log(`Rolling...`);
  } else {
    init();
  }
});
