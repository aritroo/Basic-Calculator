document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".buttons button");
  var ans = 0;

  function clearDisplay() {
    display.value = "";
  }

  function buttonClick(value) {
    if (value == "AC") {
      clearDisplay();
    } else if (value == "Del") {
      display.value = display.value.slice(0, -1);
    } else if (value == "=") {
      try {
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

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttonClick(button.textContent);
    });
  });
});
