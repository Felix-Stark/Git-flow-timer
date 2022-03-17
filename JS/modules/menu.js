const analougeTimerElem = document.querySelector('#analog');
const digitalTimerElem = document.querySelector('#digital');
const visualTimerElem = document.querySelector('#visual');
const textTimerElem = document.querySelector('#text');
const circlesTimerElem = document.querySelector('#circles');
const menuElem = document.querySelector('#menu');

import { showDigitalClock } from "./digital.js";
import { addClockToHTML } from "./analouge-overlay.js";
import { timer } from "./timer-function.js"

export function showMenuOptions () {
    analougeTimerElem.addEventListener('click', () => {
        console.log('den analoga');
        addClockToHTML();
        menuElem.classList.remove('show');
 
    });

    digitalTimerElem.addEventListener('click', () => {
        console.log('den digitala');
        menuElem.classList.remove('show');
        showDigitalClock(timer);
        
 
    });
    
    visualTimerElem.addEventListener('click', () => {
        console.log('den visuella')
    
    });
    
    textTimerElem.addEventListener('click', () => {
        console.log('text-timern')
    });

    circlesTimerElem.addEventListener('click', () => {
        console.log('cirkel-timern')
    });
}
