// Change text content and CSS styles
const changeBtn = document.getElementById("change-btn");
const mainTitle = document.getElementById("main-title");
const dynamicBox = document.getElementById("dynamic-box");

changeBtn.addEventListener("click", () => {
  mainTitle.textContent = "You just changed the title! 🎉";
  dynamicBox.textContent = "Box style has been updated!";
  dynamicBox.style.backgroundColor = "lightgreen";
  dynamicBox.style.color = "#333";
  dynamicBox.style.fontWeight = "bold";
});

// Add or remove an element
const toggleBtn = document.getElementById("toggle-element-btn");
let extraParagraph;

toggleBtn.addEventListener("click", () => {
  if (!extraParagraph) {
    extraParagraph = document.createElement("p");
    extraParagraph.textContent = "This paragraph was added dynamically!";
    document.getElementById("content-section").appendChild(extraParagraph);
  } else {
    extraParagraph.remove();
    extraParagraph = null;
  }
});
