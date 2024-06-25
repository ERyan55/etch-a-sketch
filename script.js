function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < size; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.addEventListener(
        "mouseover",
        () => (box.style.backgroundColor = "gray")
      );
      row.appendChild(box);
    }
    const container = document.querySelector(".container");
    container.appendChild(row);
  }
}

function setGridSize() {
  const size = prompt("Enter a number from 1 to 100");
  const originalContainer = document.querySelector(".container");
  document.body.removeChild(originalContainer);
  const newContainer = document.createElement("div");
  newContainer.classList.add("container");
  document.body.appendChild(newContainer);
  makeGrid(size);
}

// main method
makeGrid(16);
const button = document.querySelector("button");
button.addEventListener("click");
