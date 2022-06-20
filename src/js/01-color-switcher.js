const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onClickStart);
refs.stopBtn.addEventListener('click', onClickStop);

let timerId;

function onClickStart() {
    timerId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
};

function onClickStop() {
    clearInterval(timerId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
 
