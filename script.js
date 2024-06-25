function makeGrid() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < 16; i++) {
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

// main method
makeGrid();
