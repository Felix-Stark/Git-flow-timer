import { showSetTime } from "./set-time.js";

const mainElem = document.querySelector('main');

export function showLoadingOverlay () {
    mainElem.innerHTML = `
    <section class="loading-overlay">
        <img src="/assets/logo.svg" alt="logo">
        <h3>For all your timing needs</h3>
    </section>`;
}

export function hideLoadingOverlay () {
    showSetTime();
}

setTimeout(() => {hideLoadingOverlay();}, 2000);