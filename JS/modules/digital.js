import { showAlarm } from "./alarm.js";
import { showSetTime } from "./set-time.js";


const mainElem = document.querySelector('main');


export function showDigitalClock(timer, timeLeft) {
    timeLeft= timer.getTimeValues();
    mainElem.innerHTML = `
    <div class="timerInfo">
        <h1 id="remaining">${timeLeft}</h1>
    </div> 
    <button class="button abort-btn">Abort timer</button>`;

    let remaining = document.querySelector('#remaining');
    timer.addEventListener('secondsUpdated', function (e) {
        console.log(timer.getTimeValues());
        remaining.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds']);
    });


    const abortBtn = document.querySelector('.abort-btn');
    abortBtn.addEventListener('click', () => {
        timer.stop();
        showSetTime();
    })
   
}
