function setup() {
  createCanvas(windowWidth, windowHeight); // Create canvas to fit the window
  background("#fdfcdc"); // Set background color
}

function draw() {
  background("#fdfcdc"); // Refresh background
  rectMode(CENTER); // Set rectangle drawing mode to center
  noFill(); // Do not fill shapes
  stroke("#00BFFF"); // Set stroke color for circles and rectangles
  strokeWeight(2); // Set line thickness for the grid pattern

  // Define variables for shape sizes
  var rect_width = 50 + mouseX / 10; // Width of rectangles
  var bc_width = 50 + mouseY / 10;   // Diameter of large circles
  var sc_width = 25 + mouseX / 25;   // Diameter of small circles

  // Draw grid of shapes
  for (let j = 0; j < 20; j++) { // 20 rows
    for (let i = 0; i < 40; i++) { // 40 items per row
      ellipse(25 + 50 * i, 25 + 50 * j, bc_width); // Large circle
      rect(25 + 50 * i, 25 + 50 * j, rect_width); // Rectangle
      ellipse(50 + 50 * i, 50 + 50 * j, sc_width); // Small circle
    }
  }

  // Draw the central text "aespa"
  textAlign(CENTER, CENTER);
  textSize(200); // Adjust text size as needed
  fill("#32CD32"); // Set fill color for the text
  stroke("#32CD32"); // Set stroke color for the text outline
  strokeWeight(8); // Set stroke thickness for text outline
  text("aespa", width / 2, height / 2); // Position text in the center
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size when the window is resized
}
