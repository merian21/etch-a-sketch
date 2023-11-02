const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "blue";
  });
  container.appendChild(div);
}

