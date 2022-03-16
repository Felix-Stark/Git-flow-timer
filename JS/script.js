import { digitalClock } from "./modules/digital.js";
import { addClockToHTML } from "./modules/analouge-overlay.js";
import { showLoadingOverlay } from "./modules/loading-overlay.js";


const menuElem = document.querySelector('#menu')
const digitalElem = document.querySelector('#digital')
// const analogElem = document.querySelector('#analog')

const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu')
// const lessTime = document.querySelector('#less-time')
// const moreTime = document.querySelector('#more-time')
const startBtn = document.querySelector('#start-btn')


/* function som visar loading-overlay i x antal sekunder innan set time-vyn visas.   */
showLoadingOverlay();

openMenu.addEventListener('click', ()=> {
    console.log("open");
    menuElem.classList.toggle('show')
})
closeMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show')
})

digitalElem.addEventListener('click', () => {
    digitalClock()
})

// startBtn.addEventListener('click', () => {
//     console.log('hallo')
//     addClockToHTML()
// })

