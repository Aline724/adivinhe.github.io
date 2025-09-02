let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (!guess) {
    message.textContent = "Digite um número válido!";
    message.style.color = "yellow";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = "🎉 Parabéns! Você acertou!";
    message.style.color = "lightgreen";
  } else if (guess > secretNumber) {
    message.textContent = "📉 Tente um número menor!";
    message.style.color = "red";
  } else {
    message.textContent = "📈 Tente um número maior!";
    message.style.color = "orange";
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("guess").value = "";
  document.getElementById("message").textContent = "";
}
