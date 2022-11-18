const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let timerAnimated = false;
  return (secondsInput) => {
    if (timerAnimated) {
      return;
    }
    timerAnimated = true;
    let timer = setInterval(() => {
      if (secondsInput < 0) {
        clearInterval(timer);
        timerAnimated = false;
      } else {
        let hours = Math.floor(secondsInput / 3600);
        let minutes = Math.floor(secondsInput / 60) - hours * 60;
        let seconds = secondsInput - hours * 3600 - minutes * 60;
        timerEl.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
      secondsInput--;
    }, 1000);
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  let strSplitted = event.target.value.split("");
  let strFiltered = strSplitted.filter(elem => {
    if (elem === ' ') {
      return false;
    } else if (Number(elem) === 0) {
      return true;
    } else if (Number(elem)) {
      return true;
    }
  });
  event.target.value = strFiltered.join("");
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(+seconds);
  inputEl.value = '';
});
