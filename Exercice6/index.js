const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = 0;
}

function calculateResult() {
  try {
    const val = display.value;

    const regex = /^(-?\d+(?:\.\d+)?)([+\-*/])(-?\d+(?:\.\d+)?)$/;

    const match = val.match(regex);

    if (!match) {
      display.value = "Invalid input";
      return;
    }

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          display.value = "Division by zero is not allowed";
          return;
        } else {
          result = num1 / num2;
        }
        break;
      default:
        display.value = "Invalid input";
        return;
    }

    display.value = result;
  } catch (error) {
    display.value = "Invalid input";
  }
}
