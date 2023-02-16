function tictactoe() {
  const cells = document.querySelectorAll("[data-cell]");

  cells.forEach((cell) => {
    cell.addEventListener("click", playerMove, { once: true });
  });

  function playerMove(e) {
    const cell = e.target;
    if (cell.textContent == "X" || cell.textContent == "O") {
      return;
    }
    cell.textContent = "X";
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
        break;
      }
    }
  }
}

tictactoe();
