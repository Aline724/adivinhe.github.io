# adivinhe.github.io
 jogo de adivinhação
 📄 index.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo da Adivinhação</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🎲 Jogo da Adivinhação</h1>
    <p>Tente adivinhar o número entre <strong>1 e 10</strong></p>

    <input type="number" id="guess" placeholder="Digite seu palpite" min="1" max="10">
    <button onclick="checkGuess()">🎯 Adivinhar</button>
    <button onclick="restartGame()">🔄 Reiniciar</button>

    <p id="message"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>

🎨 style.css

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #fff;
  text-align: center;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

input {
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin: 10px;
  width: 200px;
}

button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  background-color: #ff9800;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #e68900;
}

#message {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

⚙️ script.js

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

