const decimalInput = document.getElementById("decimalInput");
const resultText = document.getElementById("binaryResult");

function convertToBinary() {
  resultText.textContent = "";

  let decimalNumber = decimalInput.value;

  const number = parseInt(decimalNumber, 10);
  const numberBinary = number.toString(2);
  resultText.textContent = numberBinary;
}
