const decimalInput = document.getElementById("decimalInput");
const resultText = document.getElementById("binaryResult");

function convertToBinary() {
  resultText.textContent = "";

  let decimalNumber = decimalInput.value;

  if (decimalNumber === "" || isNaN(decimalNumber)) {
    return;
  }

  const number = parseInt(decimalNumber, 10);
  const numberBinary = number.toString(2);
  resultText.textContent = numberBinary;
}
