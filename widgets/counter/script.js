const counter = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease-btn');
const increaseButton = document.getElementById('increase-btn');
const resetButton = document.getElementById('reset-btn');

let counterValue = Number.parseInt(counter.innerHTML);

const holdTime = 700;
let holdTimeout;
let counterUpdateInterval;

function clearSchedules() {
  clearInterval(counterUpdateInterval);
  clearTimeout(holdTimeout);
}

// decrease

decreaseButton.addEventListener('click', () => {
  if (counterValue < 1) {
    return;
  }
  
  counter.innerHTML = --counterValue;
});

 // fast decrease

 decreaseButton.addEventListener('mousedown', () => {
  clearSchedules();
  //
  holdTimeout = setTimeout(() => {
    counterUpdateInterval = setInterval(() => {
      if (counterValue > 0) {
        counter.innerHTML = --counterValue;
      }

      if (counterValue < 1) {
        clearSchedules();
      }
    }, 100);
  }, holdTime);
});

decreaseButton.addEventListener('mouseup', () => {
  clearSchedules();
});

decreaseButton.addEventListener('mouseleave', () => {
  clearSchedules();
});

// increase

increaseButton.addEventListener('click', () => {
  counter.innerHTML = ++counterValue;
});


// fast increase

increaseButton.addEventListener('mousedown', () => {
  clearSchedules();
  //
  holdTimeout = setTimeout(() => {
    counterUpdateInterval = setInterval(() => {
      counter.innerHTML = ++counterValue;
    }, 100);
  }, holdTime);
});

increaseButton.addEventListener('mouseup', () => {
  clearSchedules();
});

increaseButton.addEventListener('mouseleave', () => {
  clearSchedules();
});

// reset

resetButton.addEventListener('click', () => {
  clearSchedules();

  counterValue = 0
  counter.innerHTML = 0;
})