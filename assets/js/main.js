// NAVBAR

const button = document.getElementById("hamburger-button");

// Function to handle button click
function handleButtonClick() {
  button.style.backgroundColor = "#333"; /* Background color after click */
  button.style.borderColor = "2px solid black"; /* Text color after click */
}

// Function to reset button style
function resetButtonStyle() {
  button.style.backgroundColor = " #0e0e0e"; /* Default background color */
  button.style.color = "#9ba3b4"; /* Default text color */
}

// Add click event listener to the button
button.addEventListener("click", function(event) {
  // Prevent the click event from propagating to the document
  event.stopPropagation();
  handleButtonClick();
});

// Add click event listener to the document
document.addEventListener("click", function() {
  resetButtonStyle();
});







// Hamburger Menu Dropdown
// script.js
document.getElementById("hamburger-button").addEventListener("click", function() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none"; // Hide menu if visible
    } else {
      dropdownMenu.style.display = "block"; // Show menu if hidden
    }
  });
  
  // Optional: Close dropdown menu if clicking outside of it
  document.addEventListener("click", function(event) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    
    if (!dropdownMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      dropdownMenu.style.display = "none"; // Hide menu if clicking outside
    }
  });
  





//   ---NAVBAR