const circularProgress = document.querySelector(".circular-progress");
const progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 100;
let speed = 200;

const updateProgress = () => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#56B0F0 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if (progressStartValue < progressEndValue) {
        setTimeout(updateProgress, speed);
    }
}

updateProgress();