document.addEventListener("DOMContentLoaded", function () {
  // Select the display element
  const display = document.querySelector(".display");

  // Select all buttons
  const buttons = document.querySelectorAll(".buttons button");
  var ans = 0;

  // function for clear the display

  function clearDisplay() {
    display.value = "";
  }

  // Function to handle button clicks
  function buttonClick(value) {
    if (value == "AC") {
      clearDisplay();
    }
    // Delete the last character if Del button is clicked
    else if (value == "Del") {
      display.value = display.value.slice(0, -1);
    }
    // Evaluate the expression if = button is clicked
    else if (value == "=") {
      try {
        // Check for division by zero
        if (display.value.includes("/0")) {
          throw new Error("Error");
        }

        var result = eval(display.value);
        if (typeof result == "number") {
          result = result.toFixed(2);
        }

        display.value = result;
        ans = result;
      } catch (e) {
        display.value = "Error";
      }
    } else if (value == "Ans") {
      display.value += ans;
    } else {
      display.value += value;
    }
  }

  // Add click event listener to all buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttonClick(button.textContent);
    });
  });
});
