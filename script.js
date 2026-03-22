let currentTime = {};

function randomTime() {
  let hour = Math.floor(Math.random() * 12) + 1;
  let minute = Math.floor(Math.random() * 60);
  return {hour, minute};
}

function toWords(h, m) {
  if (m === 0) return `It’s ${h} o’clock`;
  if (m === 15) return `It’s a quarter past ${h}`;
  if (m === 30) return `It’s half past ${h}`;
  if (m === 45) return `It’s a quarter to ${h + 1}`;

  if (m < 30) return `It’s ${m} past ${h}`;
  else return `It’s ${60 - m} to ${h + 1}`;
}

function newQuestion() {
  currentTime = randomTime();

  document.getElementById("question").innerText =
    `What is ${currentTime.hour}:${String(currentTime.minute).padStart(2,'0')} in English?`;

  document.getElementById("result").innerText = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  let user = document.getElementById("answer").value.toLowerCase().trim();
  let correct = toWords(currentTime.hour, currentTime.minute).toLowerCase();

  if (user === correct) {
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = "❌ Wrong: " + correct;
  }
}

newQuestion();
