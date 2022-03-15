const bodyElem = document.querySelector('body');

function digitalClock() {
    bodyElem.innerHTML = `
    <header class="flex menu__bar">
    <nav>
        <span class="material-icons material-icons-outlined">
            menu
        </span>
        <section class="hidden menu__overlay bg__color--333">
            <ul class="menu__list flex column">  
                <li class="list__item">Analaog timer</li>
                <li class="list__item">Digital timer</li>
                <li class="list__item">Visual timer</li>
                <li class="list__item">Text timer</li>
                <li class="list__item">Circles timer</li>
            </ul>
        </section>
    </nav>
    <h3>interval</h3>
</header>
<main>
    <h1 class="digital-timer">7:32</h1>
    <button class="button">Abort timer</button>
</main>`
}