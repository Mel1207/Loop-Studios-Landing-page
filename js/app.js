'use strict'

// DOM Var declarations
const navBar = document.querySelector('.nav-top');
const menu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const docuBody = document.body; 



// DOM Event Listeners
menu.addEventListener('click', () => {
    menu.classList.toggle('menu-click')
    mobileMenu.classList.toggle('mobile-menu-show')
    docuBody.classList.toggle('body-hidden')

    console.log(menu)
})

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;

    if(scroll >= 50) {
        navBar.classList.add('toggle')
        // console.log('toggle new class')
    } else {
        // console.log('remove class')
        navBar.classList.remove('toggle')
    }
    
});