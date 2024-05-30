const canvas = document.getElementById("canvas");
// "getContext" method gets that element's context — the thing onto which the drawing will be rendered.
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const resolution = 10; // Size of each cell
const cols = width / resolution;
const rows = height / resolution;

let grid = createGrid(cols, rows);
let isMouseDown = false;

// ==================================

// use "mousedown", "mousemove", and "mouseup" to simulate the dragging effect.
canvas.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  addSand(event);
});

canvas.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    addSand(event);
  }
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// ==================================

function addSand(event) {
  const x = Math.floor(event.offsetX / resolution);
  const y = Math.floor(event.offsetY / resolution);
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    grid[y][x] = 1; // Mark the cell as filled with sand
  }
}

function createGrid(cols, rows) {
  const arr = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  return arr;
}

function updateGrid() {
  for (let y = rows - 1; y >= 0; y--) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1 && y + 1 < rows && grid[y + 1][x] === 0) {
        grid[y][x] = 0;
        grid[y + 1][x] = 1;
      }
    }
  }
}

function renderGrid() {
  ctx.clearRect(0, 0, width, height); // clear canvas
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1) {
        ctx.fillStyle = "white";
        ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
      }
    }
  }
}

function loop() {
  updateGrid();
  renderGrid();
  requestAnimationFrame(loop);
  // "requestAnimationFrame" Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.
}

loop();
