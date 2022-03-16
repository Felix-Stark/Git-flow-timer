const mainElem = document.querySelector('main');

addClockToHTML();

function addClockToHTML () {

    bodyElem.innerHTML = `


    mainElem.innerHTML = `

    <header class="flex menu__bar">
        <nav>
            <span class="material-icons material-icons-outlined">
                menu
            </span>
            <section class="menu__overlay bg__color--333">
                <ul class="menu__list flex column">  
                    <li class="list__item">Analaog timer</li>
                    <li class="list__item">Digital timer</li>
                    <li class="list__item">Visual timer</li>
                    <li class="list__item">Text timer</li>
                    <li class="list__item">Circles timer</li>
                </ul>
            </section>
        </nav>
    </header>

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