const mainElem = document.querySelector('main');

export function digitalClock() {
    mainElem.innerHTML = `
        <main>
            <h1 class="digital-timer">7:32</h1>
            <button class="button">Abort timer</button>
        </main>`
}