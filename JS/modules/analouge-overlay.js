const mainElem = document.querySelector('main');


export function addClockToHTML() {
    mainElem.innerHTML = `
    <main class="flex column">
        <div class="clock">
            <div class="dot"></div>
            <div class="second"></div>
            <div class="minute"></div>
        </div>
        <button class="button abort-btn">Abort timer</button>
    </main>`;
}
