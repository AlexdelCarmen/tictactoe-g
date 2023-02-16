function tictactoe() {
    const cells = document.querySelectorAll("[data-cell]");
    const banner = document.getElementById("winner");
    const winningCombinations = [    [0, 1, 2], // horizontal
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // vertical
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonal
      [2, 4, 6],
    ];
  
    let playerCells = [];
    let opponentCells = [];
  
    // Returns true if the given array of cells contains a winning combination
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
  
    // Returns true if all cells are filled with Xs and Os
    function checkDraw() {
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
          return false;
        }
      }
      return true;
    }
  
    // Adds the given cell index to the given array
    function addCell(index, array) {
      array.push(index);
    }
  
    // Removes the click event listener from all cells
    function disableCellClickListeners() {
      cells.forEach((cell) => {
        cell.removeEventListener("click", handleClick);
      });
    }
  
    // Handles the player's move
    function handlePlayerMove(cell) {
      if (cell.textContent !== "") {
        return;
      }
      cell.textContent = "X";
      addCell(Array.from(cells).indexOf(cell), playerCells);
      if (checkWinner(playerCells)) {
        banner.textContent = "PLAYER WINS";
        disableCellClickListeners();
        return;
      }
      if (checkDraw()) {
        banner.textContent = "DRAW";
        disableCellClickListeners();
        return;
      }
      setTimeout(handleOpponentMove, 300);
    }
  
    // Handles the opponent's move
    function handleOpponentMove() {
      let emptyCells = Array.from(cells).filter((cell) => {
        return cell.textContent === "";
      });
      if (emptyCells.length === 0) {
        banner.textContent = "DRAW";
        disableCellClickListeners();
        return;
      }
      let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      randomCell.textContent = "O";
      addCell(Array.from(cells).indexOf(randomCell), opponentCells);
      if (checkWinner(opponentCells)) {
        banner.textContent = "COMPUTER WINS";
        disableCellClickListeners();
        return;
      }
      if (checkDraw()) {
        banner.textContent = "DRAW";
        disableCellClickListeners();
        return;
      }
    }
  
    // Handles click events on cells
    function handleClick(event) {
      handlePlayerMove(event.target);
    }
  
    // Add click event listeners to all cells
    cells.forEach((cell) => {
      cell.addEventListener("click", handleClick);
    });
  }
  
  tictactoe();
  