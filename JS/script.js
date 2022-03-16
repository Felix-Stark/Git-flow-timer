
import { showLoadingOverlay } from "./modules/loading-overlay.js";
import { showMenuOptions } from "./modules/menu.js";

const menuElem = document.querySelector('#menu');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu')

showLoadingOverlay();

openMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
    showMenuOptions();
});

closeMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show');
});