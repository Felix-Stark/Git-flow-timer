const bodyElem = document.querySelector('body');

addClockToHTML();

function addClockToHTML () {
    bodyElem.innerHTML = `
    <main class="flex column">
        <div class="clock">
            <div class="dot"></div>
            <div class="second"></div>
            <div class="minute"></div>
        </div>
        <button class="button">Abort timer</button>
    </main>`;
}

export {addClockToHTML};