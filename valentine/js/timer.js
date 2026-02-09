const timerEl = document.getElementById("timer");
const dEl = document.getElementById("d");
const hEl = document.getElementById("h");
const mEl = document.getElementById("m");

let interval = null;

// 🔒 تاریخ واقعی رابطه
const RELATION_START = new Date(2024, 5, 1, 0, 0, 0).getTime();

function updateTimer() {
  let diff = Math.floor((Date.now() - RELATION_START) / 1000);
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / 86400);
  diff %= 86400;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);

  dEl.textContent = days;
  hEl.textContent = String(hours).padStart(2, "0");
  mEl.textContent = String(minutes).padStart(2, "0");
}

function startTimer() {
  if (interval) return;

  timerEl.classList.add("active");
  updateTimer();
  interval = setInterval(updateTimer, 1000);
}

window.startRelationshipTimer = startTimer;
