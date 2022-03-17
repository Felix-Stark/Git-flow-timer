const mainElem = document.querySelector('main');


export function digitalClock(minutes, seconds) {
    mainElem.innerHTML = `
        <div class="digital-timer">
            <h1 class="minutes">${minutes}:</h1>
            <h1 class="seconds">${seconds}</h1>
        </div>
            <button class="button abort-btn">Abort timer</button>`;
}