import { showSetTime } from "./set-time.js";

const mainElem = document.querySelector('main');

export function showDigitalClock(timer, setTime) {
    mainElem.innerHTML = `
    <div class="timerInfo">
    
    <h1 id="remaining">${setTime}:00</h1>
    </div> 
    <button class="button abort-btn">Abort timer</button>`;

    let remaining = document.querySelector('#remaining');
    timer.addEventListener('secondsUpdated', function (e) {
            
        remaining.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds']);
    });
    const abortBtn = document.querySelector('.abort-btn');
    abortBtn.addEventListener('click', () => {
        console.log("hello");
        timer.stop();
        showSetTime();
    })
    
}
