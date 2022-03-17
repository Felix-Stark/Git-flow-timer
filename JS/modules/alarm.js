import { showSetTime } from "../modules/set-time.js";

const mainElem = document.querySelector('main');






export function showAlarm () {
    mainElem.innerHTML = `
    <section class="alarm-overlay">
        <div class="ring ring-one"></div>
        <div class="ring ring-two"></div>
        <div class="ring ring-three"></div>
        <div class="ring ring-four"></div>
        <img src="/assets/alarm.svg" alt="alarm-icon">
        <h3>Times up!</h3>
        <button class="button new-timer-btn">set new timer</button>
    </section>`;

 
    // Knapp för att sätta nytt larm
    const setNewTimerButton = document.querySelector('.new-timer-btn')
    setNewTimerButton.addEventListener('click', () => {
        showSetTime()
    })
}


