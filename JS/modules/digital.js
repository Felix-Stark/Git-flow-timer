const mainElem = document.querySelector('main');


export function digitalClock(minutes, seconds) {
    mainElem.innerHTML = `
    <div class="timerInfo">
    
    <h1 id="remaining">00</h1>
</div> 
            <button class="button abort-btn">Abort timer</button>`;
}