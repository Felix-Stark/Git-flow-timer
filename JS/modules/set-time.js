// import { activateStartTimerButton } from "./timer-function.js";
import { activateStartTimerButton } from "../script.js";

export { intervalBox, breakBox }

// import easyTimer from "./easyTimer.js";

const mainElem = document.querySelector('main')

let setTime = 10;
let intervalBox = false;
let breakBox = false;

export function showSetTime() {
    mainElem.innerHTML = `
        <section class="set__time" id="set-time">
            <span class="less-time material-icons material-icons-outlined" id="less-time">
                arrow_back_ios
            </span>
            <section class="choose-time">
                <p class="interval-time" id="time">${setTime}</p>
                <p class="minutes">minutes</p>
            </section>
             
            <span class="more-time material-icons material-icons-outlined" id="more-time">
                arrow_forward_ios
            </span>
        </section>
        <section class="set-interval">
            <div>
                <input type="checkbox" name="intervals" id="intervals">
                <label for="intervals">intervals</label>
            </div>
            <div>
                <input type="checkbox" name="break/interval" id="break">
                <label for="break">5 min break / interval</label>
            </div>
        </section>
        <button class="start-timer" id="start-btn">Start timer</button> `;
        let lessTime = document.querySelector('#less-time');
        let moreTime = document.querySelector('#more-time');

        intervalBox = document.querySelector('#intervals');
        breakBox = document.querySelector('#break');

        intervalBox.addEventListener('click', () => {
            console.log(intervalBox)
            if(intervalBox.checked) {
                intervalBox = true;
            } else {
                intervalBox = false;
            }
        })

        breakBox.addEventListener('click', () => {
            if(breakBox.checked) {
                breakBox = true;
            } else {
                breakBox = false;
            }
        })



        
        changeTimer(lessTime, moreTime);
        activateStartTimerButton(setTime);
        
};


function changeTimer (lessTime, moreTime) {
    lessTime = document.querySelector('#less-time');
    moreTime = document.querySelector('#more-time');
    lessTime.addEventListener('click', () => {
        setTime = setTime - 1;
        showSetTime();
    });
    moreTime.addEventListener('click', () => {
        setTime = setTime + 1;
        showSetTime();
    });
}
