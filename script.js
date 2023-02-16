function tictactoe() {
  const cells = document.querySelectorAll("[data-cell]");

  cells.forEach((cell) => {
    cell.addEventListener("click", playerMove, { once: true });
  });

  let playerCells = [];
  let opponentCells = [];

  function addCells(id, array) {
    const cellIndex = Array.from(cells).indexOf(document.getElementById(id));
    array.push(cellIndex);
  }

  const banner = document.getElementById("winner");

  const winningCombinations = [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6],
  ];

  function checkWinner(selectedCells) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        selectedCells.includes(a) &&
        selectedCells.includes(b) &&
        selectedCells.includes(c)
      ) {
        return true;
      }
    }
    return false;
  }

  function playerMove(e) {
    const cell = e.target;
    if (cell.textContent == "X" || cell.textContent == "O") {
      return;
    }

    cell.textContent = "X";
    addCells(cell.id, playerCells);
    if (checkWinner(playerCells)) {
      banner.textContent = "PLAYER WINS";
      cells.forEach((cell) => {
        cell.removeEventListener("click", playerMove);
      });
      return;
    }
    setTimeout(function () {
      opponentMove();
    }, 300);
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function opponentMove() {
    let cellArray = Array.from(cells);
    for (let index = 0; index < cellArray.length; index++) {
      let randomCell = getRandomNumber(0, cellArray.length - 1);
      if (
        cellArray[randomCell].textContent == "X" ||
        cellArray[randomCell].textContent == "O"
      ) {
        continue;
      } else {
        cellArray[randomCell].textContent = "O";
        addCells(randomCell, opponentCells);
        break;
      }
    }
  }
}

tictactoe();
