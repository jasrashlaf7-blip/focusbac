let time = 25 * 60;
let timerInterval;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const langSelect = document.getElementById("language");

const texts = {
  en: {
    subtitle: "Study Timer",
    start: "Start",
    reset: "Reset",
    note: "Focus for 25 minutes"
  },
  fr: {
    subtitle: "Minuteur d'étude",
    start: "Démarrer",
    reset: "Réinitialiser",
    note: "Concentrez-vous pendant 25 minutes"
  },
  ar: {
    subtitle: "مؤقت الدراسة",
    start: "ابدأ",
    reset: "إعادة",
    note: "ركز لمدة 25 دقيقة"
  }
};

function updateText(lang) {
  document.getElementById("subtitle").innerText = texts[lang].subtitle;
  startBtn.innerText = texts[lang].start;
  resetBtn.innerText = texts[lang].reset;
  document.getElementById("note").innerText = texts[lang].note;

  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timerDisplay.innerText =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

startBtn.onclick = () => {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    time--;
    updateTimer();
    if (time <= 0) clearInterval(timerInterval);
  }, 1000);
};

resetBtn.onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 25 * 60;
  updateTimer();
};

langSelect.onchange = (e) => {
  updateText(e.target.value);
};

updateTimer();
updateText("en");

