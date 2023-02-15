const cells = document.querySelectorAll("[data-cell]");

cells.forEach(cell => {
  cell.addEventListener("click", playerMove, { once: true });
});

function playerMove(e) {
  const cell = e.target;
  cell.textContent = "X";
}
