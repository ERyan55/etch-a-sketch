function makeGrid() {
  for (let i = 0; i < 16; i++) {
    const col = document.createElement("div");
    for (let i = 0; i < 16; i++) {
      const row = document.createElement("div");
      row.classList.add("box");
      row.style.border = "2px solid black";
      col.appendChild(row);
    }
    const container = document.querySelector(".container");
    container.appendChild(col);
  }
}

makeGrid();
