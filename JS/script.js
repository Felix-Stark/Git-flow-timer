import { digitalClock } from "./modules/digital.js";

import { showMenuOptions } from "./modules/menu.js";
// import { digitalClock } from "./modules/digital.js";
import { showSetTime } from "./modules/set-time.js";
// import easyTimer from "./easyTimer.js";
// import { startTimer } from "./modules/timer-function.js";

import { showAlarm } from "./modules/alarm.js";


const menuElem = document.querySelector('#menu');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const logoElem = document.querySelector('.logo');

// let timer = new Timer();



logoElem.addEventListener('click', () => {
    hideLoadingOverlay();
})





showLoadingOverlay();


openMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
    showMenuOptions();
});

closeMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
});

export function activateStartTimerButton (setTime){

    
    let remaining = document.querySelector('#remaining');
    
    
    const startBtn = document.querySelector('#start-btn');

   
    /* Fixa så att man inte kan starta timern om den redan är aktiv. Det fuckar upp */
    startBtn.addEventListener('click', ()=> {
        var timer = new Timer();
        timer.start({countdown: true, startValues: {minutes: setTime}});
        console.log(timer)
        console.log(setTime)
        /* flytta till digital vy */
        timer.addEventListener('secondsUpdated', function (e) {
            digitalClock();
            remaining.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds']);
        });

        timer.addEventListener('targetAchieved', function (e) {
           /* function to times up */
        });
    });
}



function hideLoadingOverlay () {
    showSetTime();
}

// function startTimer (setTime){
// /* Som timertest bara. Just nu räknar den ner i konsolen som om man ställer in sekunder.
// Den behöver*/

// /* Vad är det han skrivit i general om easyTimer??? Är det något vi ska använda kanske? */
//     let currentTime = setTime * 60;
//     let timer = setInterval(() => {
//         // Check if time left
//         if(currentTime >= 0) {
//            // Update timer in gui
//            console.log(currentTime);
//            digitalClock(currentTime, currentTime%60)
//            // count down current time
//            currentTime--;
//        } else {
//         //    gameOver(timer, gameLoop)
//         console.log('times up');
//         clearInterval(timer);
//         //anropa en times-up overlay
//        }
//     }, 1000);
// }

/* En stop timer kanske? */

function startTimer (setTime){
/* Som timertest bara. Just nu räknar den ner i konsolen som om man ställer in sekunder.
Den behöver*/

/* Vad är det han skrivit i general om easyTimer??? Är det något vi ska använda kanske? */
    let currentTime = setTime * 60;
    let timer = setInterval(() => {
        // Check if time left
        if(currentTime >= 0) {
           // Update timer in gui
           console.log(currentTime);
           digitalClock(currentTime, currentTime%60)
           // count down current time
           currentTime--;
       } else {
        //    gameOver(timer, gameLoop)
        console.log('times up');
        clearInterval(timer);
        //anropa en times-up overlay
        showAlarm();
       }
    }, 1000);
}

/* En stop timer kanske? */


