import { digitalClock } from "./modules/digital.js";
import { showLoadingOverlay } from "./modules/loading-overlay.js";

const menuElem = document.querySelector('#menu')
const digitalElem = document.querySelector('#digital')

const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu')


showLoadingOverlay();

openMenu.addEventListener('click', ()=> {
    console.log("open");
    menuElem.classList.toggle('show');
});

closeMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
});

digitalElem.addEventListener('click', () => {
    digitalClock();
});


