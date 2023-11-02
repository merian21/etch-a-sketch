const container = document.querySelector(".container");
const div = document.createElement("div");
div.classList.add("grid-item");
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  container.appendChild(div);
}
