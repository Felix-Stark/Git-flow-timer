/** TODO
 * visa overlay
 * hämta variabeln som styr timern
 * spara tiden som visas i timern när man trycker på pause
 * visa pausetiden i overlay
 * unpause knappen gör att tiden fortsätter där den pausades.
 */

import { startTimer, timer } from "../modules/timer-function.js";
import { setTime, breakCheckedBox } from "./set-time.js";

// export { startPauseTimer }



const mainElem = document.querySelector('main')
const pauseOverlay = document.querySelector('.pause-overlay')

 //tiden när man trycker på pause

let pauseTimeLeft;
let pauseTimer;


export function showPauseOverlay() {
    pauseTimeLeft = timer.getTimeValues();
    mainElem.innerHTML = `
    <section class="pause-overlay">
                <div class="ring ring-one"></div>
                <div class="ring ring-two"></div>
                <div class="ring ring-three"></div>
                <div class="ring ring-four"></div>
                <img src="/assets/pause-icon.png" alt="pause-icon">
                <h3>Pause & breathe</h3>
                <p id="pause-time">${pauseTimeLeft}</p>
                <button class="button unpause-btn">NO PAUSE, GO NOW!</button>
            </section>`;

            let pauseTime = document.querySelector('#pause-time')
            timer.addEventListener('secondsUpdated', function (e) {
                console.log(pauseTimer.getTimeValues());
                pauseTime.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds']);

        const unPauseBtn = document.querySelector('.unpause-btn')
        unPauseBtn.addEventListener('click', () => {
            timer.stop();
            console.log('kör igen');
            startTimer(setTime);
        })

})};
