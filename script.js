let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace("%", "/100"));
  } catch {
    display.value = "Error";
  }
}

function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const date = now.toLocaleDateString([], {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  document.getElementById("time").innerText = time;
  document.getElementById("date").innerText = date;
}

setInterval(updateTime, 1000);
updateTime();
