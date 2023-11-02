const container = document.querySelector(".container");
const changeGridBtn = document.querySelector("#changeGrid");

changeGridBtn.addEventListener("click", setGridSize);

let gridSize = 4;

createGrid();

function createGrid() {
    container.innerHTML = '';
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

function setGridSize() {
  gridSize = prompt("Set Grid size.");
  createGrid();
}
