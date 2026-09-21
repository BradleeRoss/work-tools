let timer = null;
let focusTime = 25;
let breakTime = 5;
let minutes = 25;
let seconds = 0;
let isRunning = false;
let currentMode = 'focus';

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const statusBadge = document.getElementById('status-badge');
const focusInput = document.getElementById('focus-input');
const breakInput = document.getElementById('break-input');
const alarmSound = document.getElementById('alarm-sound');

function updateDisplay() {
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  timerDisplay.textContent = `${m}:${s}`;
  const modeLabel = currentMode === 'focus' ? 'Focus' : 'Break';
  document.title = `${m}:${s} - ${modeLabel}`;
}

function updateStatusBadge() {
  if (currentMode === 'focus') {
    statusBadge.textContent = 'Focus Time';
    statusBadge.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  } else {
    statusBadge.textContent = 'Break Time';
    statusBadge.style.backgroundColor = 'rgba(46, 204, 113, 0.35)';
  }
}

function updateCustomTimes() {
  let newFocus = parseInt(focusInput.value, 10);
  let newBreak = parseInt(breakInput.value, 10);

  if (isNaN(newFocus) || newFocus < 1) newFocus = 1;
  if (isNaN(newBreak) || newBreak < 1) newBreak = 1;

  focusTime = newFocus;
  breakTime = newBreak;
  focusInput.value = focusTime;
  breakInput.value = breakTime;

  if (!isRunning) {
    minutes = currentMode === 'focus' ? focusTime : breakTime;
    seconds = 0;
    updateDisplay();
  }
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  focusInput.disabled = true;
  breakInput.disabled = true;

  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        alarmSound.play().catch(() => {});
        
        // Continuous auto-switch between Focus and Break
        if (currentMode === 'focus') {
          currentMode = 'break';
          minutes = breakTime;
        } else {
          currentMode = 'focus';
          minutes = focusTime;
        }
        seconds = 0;
        updateStatusBadge();
        updateDisplay();
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  focusInput.disabled = false;
  breakInput.disabled = false;
}

function resetTimer() {
  pauseTimer();
  currentMode = 'focus';
  minutes = focusTime;
  seconds = 0;
  updateStatusBadge();
  updateDisplay();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

async function togglePip() {
  if ('documentPictureInPicture' in window) {
    if (window.documentPictureInPicture.window) {
      window.documentPictureInPicture.window.close();
      return;
    }

    const app = document.getElementById('pomodoro-app');
    const pipWindow = await window.documentPictureInPicture.requestWindow({
      width: 380,
      height: 360
    });

    [...document.styleSheets].forEach((styleSheet) => {
      try {
        const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join('');
        const style = document.createElement('style');
        style.textContent = cssRules;
        pipWindow.document.head.appendChild(style);
      } catch (e) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = styleSheet.href;
        pipWindow.document.head.appendChild(link);
      }
    });

    pipWindow.document.body.classList.add('pip-mode');
    pipWindow.document.body.appendChild(app);

    pipWindow.addEventListener('pagehide', () => {
      document.body.appendChild(app);
    });
  } else {
    alert('Picture-in-Picture for web pages is supported in Chrome or Edge.');
  }
}

updateStatusBadge();
updateDisplay();
