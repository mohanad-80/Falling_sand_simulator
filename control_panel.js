const colorPicker = document.querySelector("#color-picker");
const brushSizeLabel = document.querySelector("label[for=brush-size]");
const brushSizeSlider = document.querySelector("#brush-size");
const clearBtn = document.querySelector("#clear-btn");
const rainbowCheckbox = document.querySelector("#rainbow-mode");
let red, greed, blue;

window.addEventListener("load", () => {
  colorPicker.value = "#ffffff";
  brushSizeLabel.textContent = 5;
  brushSizeSlider.value = 5;
  rainbowCheckbox.checked = false;
});

colorPicker.addEventListener("change", (event) => {
  brushColor = event.target.value;
});

rainbowCheckbox.addEventListener("change", (event) => {
  if (rainbowCheckbox.checked) {
    rainbowMode = true;
  } else {
    rainbowMode = false;
  }
});

brushSizeSlider.addEventListener("input", (event) => {
  brushSizeLabel.innerHTML = event.target.value;
  brushSize = event.target.value;
});

clearBtn.addEventListener("click", () => {
  clearGrid();
});

const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();