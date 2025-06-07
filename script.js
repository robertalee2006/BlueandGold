const grid = document.querySelector(".grid");
const circleSize = 80; // or whatever size you base your calculation on
const coin = document.querySelector("#coin");

function createCircles() {
  // Clear existing circles
  grid.innerHTML = "";

  // Calculate columns and rows based on current window size
  const columns = Math.floor(window.innerWidth / circleSize);
  const rows = Math.floor(window.innerHeight / circleSize);
  const total = columns * rows;

  for (let i = 0; i < total; i++) {
    const circle = document.createElement("div");
    circle.className = "circle";
    grid.appendChild(circle);
  }

  // Re-add event listeners for the new circles
  const circles = grid.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.addEventListener("mouseenter", () => {
      circle.classList.add("active");
      setTimeout(() => circle.classList.remove("active"), 2000);
    });

    circle.addEventListener("click", () => {
      circle.classList.add("click");
      coin.currentTime = 0;
      coin.play();

      setTimeout(() => {
        circle.classList.remove("click");
      }, 600);
    });
  });
}

// Initial load
createCircles();

// Recalculate and recreate circles on resize
window.addEventListener("resize", createCircles);
