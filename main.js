const open = document.querySelector('.header__toggle-open')
const close = document.querySelector('.header__toggle-close')

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        open.classList.toggle('disable')
        close.classList.toggle('disable')
    })
}
showMenu('nav-toggle', 'nav-menu')