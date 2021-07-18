'use strict'

// DOM Var declarations
const navBar = document.querySelector('.nav-top');

// DOM Event Listeners
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