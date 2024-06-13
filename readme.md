## Falling Sand Simulator

Welcome to the Falling Sand Simulator, an interactive physics-based sandbox where you can create and manipulate particles of sand using simple controls. This project is built using HTML, CSS, and JavaScript, and it allows you to simulate the behavior of falling sand particles on a grid. [Try it now!](https://mohanad-80.github.io/Falling_sand_simulator/).

### Features

- **Draw Sand Particles**: Use your mouse to draw sand particles on the canvas.
- **Brush Size**: Adjust the size of your brush to create larger or smaller particles.
- **Rainbow Mode**: Enable rainbow mode to have particles change color dynamically.
- **Color Picker**: Choose any color for the particles using the color picker.
- **Clear Canvas**: Clear the entire canvas with a single button click.

### Technologies Used

- **HTML**: Provides the structure of the application.
- **CSS**: Styles the application and the control panel.
- **JavaScript**: Implements the particle physics and user interactions.

### Setup and Usage

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mohanad-80/Falling_sand_simulator.git
   cd falling-sand-simulator
   ```

2. **Open the HTML File**
   Open `index.html` in your preferred web browser.

3. **GitHub Pages Link**
   You can access the simulator online at [Falling Sand Simulator](https://github.com/mohanad-80/Falling_sand_simulator.git).

### How It Works

The simulator uses a grid-based system where each cell in the grid can either be empty or contain a sand particle. The particles follow simple physics rules to fall downward and spread out when encountering obstacles.

### Key JavaScript Functions

- **addSand(event)**: Adds sand particles to the grid based on the mouse position and brush size.
- **updateGrid()**: Updates the grid by moving particles according to the physics rules.
- **renderGrid()**: Renders the grid onto the canvas.
- **HSLToRGB(h)**: Converts HSL color values to RGB format for the rainbow mode.

### Controls

- **Color Picker**: Select a color for the particles.
- **Rainbow Mode**: Toggle rainbow mode on or off.
- **Brush Size**: Adjust the size of the brush using the slider.
- **Clear Canvas**: Clear all particles from the canvas.

### Inspirations and References

This project was inspired by and built upon ideas from several resources:

- [The Coding Train - Falling Sand with p5.js](https://www.youtube.com/watch?v=L4u7Zy_b868&ab_channel=TheCodingTrain)
- [Jason Today's Falling Sand Simulation](https://jason.today/falling-improved)
- [Procedural Death Animation with Falling Sand Automata by Pierre Vigier](https://pvigier.github.io/2020/12/12/procedural-death-animation-with-falling-sand-automata.html)

### Acknowledgments

Thank you to the creators of the tutorials and articles that provided valuable insights and inspiration for this project.

### Author

- **Mohanad Ahmed**
  - [Portfolio](https://mohanad-80.github.io/portfolio/)
  - [GitHub](https://github.com/mohanad-80)
  - [LinkedIn](https://www.linkedin.com/in/mohanad-ahmed-691a50250/)

### License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to experiment with the Falling Sand Simulator, contribute or suggest improvements.

---
Enjoy!



