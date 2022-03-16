const analougeTimerElem = document.querySelector('#analog');
const digitalTimerElem = document.querySelector('#digital');
const visualTimerElem = document.querySelector('#visual');
const textTimerElem = document.querySelector('#text');
const circlesTimerElem = document.querySelector('#circles');

import { digitalClock } from "../modules/digital.js"

export function showMenuOptions () {
    analougeTimerElem.addEventListener('click', () => {
        
    });

    digitalTimerElem.addEventListener('click', () => {
        digitalClock();
    });
    
    visualTimerElem.addEventListener('click', () => {
    
    });
    
    textTimerElem.addEventListener('click', () => {
        
    });

    circlesTimerElem.addEventListener('click', () => {
        
    });
}



