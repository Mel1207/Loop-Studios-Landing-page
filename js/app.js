'use strict'

// DOM Var declarations
const navBar = document.querySelector('.nav-top');
const menu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const docuBody = document.body; 

// GSAP
gsap.registerPlugin(ScrollTrigger);
const tl = new TimelineLite({ paused: true, reversed: true });

tl.from('.mobile-link', 1, {
    opacity: 0,
    x: -100,
    duration: 0.3,
    stagger: .3
})
// tl.to('.mobile-link', 1, {
//     opacity: 1,
//     x: 0,
//     duration: 1,
//     stagger: .3
// })

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}


// DOM Event Listeners
menu.addEventListener('click', () => {
    menu.classList.toggle('menu-click')
    mobileMenu.classList.toggle('mobile-menu-show')
    docuBody.classList.toggle('body-hidden')

    toggleTween(tl);
})


// EVENT LISTENERS
window.addEventListener("scroll", () => {
    let scroll = this.scrollY;

    if(scroll >= 50) {
        navBar.classList.add('toggle')

    } else {
        navBar.classList.remove('toggle')
    }
    
});