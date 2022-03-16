
import { showLoadingOverlay } from "./modules/loading-overlay.js";
import { showMenuOptions } from "./modules/menu.js";

const menuElem = document.querySelector('#menu');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');


showLoadingOverlay();

openMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
    showMenuOptions();
});

closeMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
});


export function activateStartTimerButton (setTime){
    const startBtn = document.querySelector('#start-btn');
    
    /* Fixa så att man inte kan starta timern om den redan är aktiv. Det fuckar upp */
    startBtn.addEventListener('click', ()=> {
       startTimer(setTime);
    });
}
function startTimer (setTime){
/* Som timertest bara. Just nu räknar den ner i konsolen som om man ställer in sekunder.
Den behöver*/

/* Vad är det han skrivit i general om easyTimer??? Är det något vi ska använda kanske? */
    let currentTime = setTime;
    let timer = setInterval(() => {
        // Check if time left
        if(currentTime >= 0) {
           // Update timer in gui
           console.log(currentTime);
           // count down current time
           currentTime--;
       } else {
        //    gameOver(timer, gameLoop)
        console.log('times up')
       }
    }, 1000);
}

/* En stop timer kanske? */