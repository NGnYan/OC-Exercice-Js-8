const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = 0;
}

function calculateResult() {
  try {
    const result = eval(display.value);

    if (result === Infinity || result === -Infinity) {
      display.value = "Division by zero is not allowed";
    } else if (isNaN(result)) {
      display.value = "Invalid expression";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Invalid input";
  }
}
