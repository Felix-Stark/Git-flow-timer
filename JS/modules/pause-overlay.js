/** TODO
 * visa overlay
 * hämta variabeln som styr timern
 * spara tiden som visas i timern när man trycker på pause
 * visa pausetiden i overlay
 * unpause knappen gör att tiden fortsätter där den pausades.
 */


const mainElem = document.querySelector('main')
const pauseOverlay = document.querySelector('.pause-overlay')
const unPauseBtn = document.querySelector('.unpause-btn')
const pauseTime = document.querySelector('#pause-time') //tiden när man trycker på pause


function showPauseOverlay() {
    mainElem.innerHTML = `
    <section class="pause-overlay">
                <div class="ring ring-one"></div>
                <div class="ring ring-two"></div>
                <div class="ring ring-three"></div>
                <div class="ring ring-four"></div>
                <img src="/assets/pause-icon.png" alt="pause-icon">
                <h3>Pause & breathe</h3>
                <p id="pause-time"></p>
                <button class="button unpause-btn">NO PAUSE, GO NOW!</button>
            </section>`
}