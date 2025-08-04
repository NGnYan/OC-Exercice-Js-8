const button = document.getElementById("myButton");
const textMessage = document.getElementById("message");

button.addEventListener("click", () => {
  textMessage.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});
