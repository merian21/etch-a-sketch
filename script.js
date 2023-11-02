const container = document.querySelector(".container");
const changeGridBtn = document.querySelector("#changeGrid");

changeGridBtn.addEventListener("click", setGridSize);

let gridSize = 20;

createGrid();

// creates the grid
function createGrid() {
    // clears the grid first
    container.innerHTML = '';

    // calculates the flex-basis, so sides will be equal amount of cubes
    const itemBasis = `calc(${100 / gridSize}% - 1px)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.flexBasis = itemBasis;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "blue";
    });
    container.appendChild(div);
  }
}

// prompts the user for grid size and sets the gridsize
function setGridSize() {
  gridSize = prompt("Set Grid size (Max: 100)");
  if (gridSize > 100) {
    gridSize = 100;
  }
  if (gridSize < 1) {
    gridSize = 1;}
  createGrid();
}
