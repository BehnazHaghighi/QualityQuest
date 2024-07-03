
let timer;
let seconds = 0;

// شروع تایمر با ورود به صفحه
window.onload = () => {
  timer = setInterval(updateTimer, 1000);
};

// فرمت کردن زمان به صورت 00:00:00
function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (totalSeconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
}

// به‌روزرسانی تایمر هر ثانیه
function updateTimer() {
  seconds++;
  document.getElementById('timer').textContent = formatTime(seconds);
}
