const menuElem = document.querySelector('#menu')

const MENUBTN = document.querySelector('#menu-btn');

MENUBTN.addEventListener('click', ()=> {
    menuElem.classList.toggle('show')
    MENUBTN.classList.toggle('menu__btn--open')
})
