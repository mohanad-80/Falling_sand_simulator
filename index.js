const canvas = document.getElementById("canvas");
// "getContext" method gets that element's context — the thing onto which the drawing will be rendered.
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const resolution = 5; // Size of each cell
const cols = width / resolution;
const rows = height / resolution;
const bgColor = 0;
const velocityIncrementFactor = 0.2;
class Particle {
  constructor(color, empty, change) {
    this.color = color;
    this.empty = empty ?? true;
    this.changed = change;
    this.velocity = 0;
  }

  isEmpty() {
    return this.empty;
  }

  update(color) {
    this.color = color;
    this.changed = true;
    this.empty = color === bgColor ? true : false;
    this.velocity += velocityIncrementFactor;
  }
}

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

  let brushSize = 5;
  let extent = Math.floor(brushSize / 2);

  for (let i = y - extent; i <= y + extent; i++) {
    for (let j = x - extent; j <= x + extent; j++) {
      if (Math.random() > 0.75) {
        continue;
      }

      if (withinCols(j) && withinRows(i)) {
        grid[i][j].update(1);
      }
    }
  }
}

function withinCols(x) {
  return x >= 0 && x < cols;
}

function withinRows(y) {
  return y >= 0 && y < rows;
}

function createGrid(cols, rows) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = new Particle(0, true, true);
    }
  }
  return arr;
}

function updateGrid() {
  for (let y = rows - 1; y >= 0; y--) {
    for (let x = 0; x < cols; x += Math.random() > 0.2 ? 1 : 2) {
      const currParticle = grid[y][x];
      const currVelocity = grid[y][x].velocity;

      if (withinRows(y + 1) && currParticle.color !== bgColor) {
        let fallPos = Math.ceil(currParticle.velocity);

        while (
          fallPos > 1 &&
          (!withinRows(y + fallPos) || grid[y + fallPos][x].color !== bgColor)
        ) {
          fallPos -= 1;
        }

        const below = grid[y + fallPos][x].isEmpty();

        // randomly fall below left or right.
        // also randomly check if the block on the left exist and underneath it is empty then it has the priority to fall down before the current one falls below left. And the same for right.
        const randomPos = Math.random() > 0.5 ? 1 : -1;
        const randomDiagonal1 =
          withinCols(x + randomPos) &&
          grid[y + 1][x + randomPos].isEmpty() &&
          grid[y][x + randomPos].isEmpty();
        const randomDiagonal2 =
          withinCols(x - randomPos) &&
          grid[y + 1][x - randomPos].isEmpty() &&
          grid[y][x - randomPos].isEmpty();

        if (!below && !randomDiagonal1 && !randomDiagonal2) {
          continue;
        }

        grid[y][x].velocity = 0;
        grid[y][x].update(0);
        if (below) {
          grid[y + fallPos][x].velocity = currVelocity;
          grid[y + fallPos][x].update(1);
        } else if (randomDiagonal1) {
          grid[y + 1][x + randomPos].velocity = 0;
          grid[y + 1][x + randomPos].update(1);
        } else if (randomDiagonal2) {
          grid[y + 1][x - randomPos].velocity = 0;
          grid[y + 1][x - randomPos].update(1);
        }
      }
    }
  }
}

function renderGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x].changed) {
        ctx.fillStyle = grid[y][x].color ? "#fff" : "#000";
        ctx.fillRect(x * resolution, y * resolution, resolution, resolution);
        grid[y][x].changed = false;
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
