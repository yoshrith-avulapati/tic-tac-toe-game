const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset-button");
let result = document.querySelector(".result");
const reset = document.querySelector("#reset-button");

let turn = true; //player1 = O, player2 = X

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      //player = O
      box.innerText = "O";
      turn = false;
    } else {
      //player = X
      box.innerText = "X";
      turn = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

let disabledButtons = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

let showResult = (number, type) => {
  result.classList.add("result-reveal");
  result.innerHTML = `
    Congratulations!
    Player ${number} wins!
  `;
  disabledButtons();
};

function checkWinner() {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos1Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        if (pos1Val === "O") {
          showResult(1);
        } else {
          showResult(2);
        }
      }
    }
  }
}

reset.addEventListener("click", () => {
  console.log("Clicked!");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  result.innerText = "";
  result.classList.remove("result-reveal");
});

//If you have time, add New Game button and score card!
