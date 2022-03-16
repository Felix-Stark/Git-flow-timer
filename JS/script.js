const menuElem = document.querySelector('#menu')

const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu')
const lessTime = document.querySelector('#less-time')
const moreTime = document.querySelector('#more-time')

openMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show')
})
closeMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('show')
})

