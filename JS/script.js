import { showMenuOptions } from "./modules/menu.js";
// import { digitalClock } from "./modules/digital.js";
import { showSetTime } from "./modules/set-time.js";
import { startTimer } from "./modules/timer-function.js";
// import easyTimer from "./easyTimer.js";
// import { startTimer } from "./modules/timer-function.js";

const menuElem = document.querySelector('#menu');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const logoElem = document.querySelector('.logo');

// let timer = new Timer();


logoElem.addEventListener('click', () => {
    hideLoadingOverlay();
})

openMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
    showMenuOptions();
});

closeMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
});

export function activateStartTimerButton(setTime){    
    const startBtn = document.querySelector('#start-btn');
   
    /* Fixa så att man inte kan starta timern om den redan är aktiv. Det fuckar upp */
    startBtn.addEventListener('click', ()=> {
        startTimer(setTime);
    });
}


function hideLoadingOverlay () {
    showSetTime();
}

