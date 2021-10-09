const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navlogo= document.querySelector('#navbar__logo');


// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// close mobile menu when clicking menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};

// show active menu when scrolling
const highlightMenu = () => {
    const highlightClass = 'highlight'
    const elem = document.querySelector( `.${highlightClass}`);
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;

    // adds the 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add(highlightClass);
        aboutMenu.classList.remove(highlightClass);
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add(highlightClass);
        homeMenu.classList.remove(highlightClass);
        servicesMenu.classList.remove(highlightClass);
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add(highlightClass);
        aboutMenu.classList.remove(highlightClass);
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600)  || elem) {
        elem.classList.remove(highlightClass)
    }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)
menu.addEventListener('click', mobileMenu)
menuLinks.addEventListener('click', hideMobileMenu)
navlogo.addEventListener('click', hideMobileMenu)

// AnyDevWork(prompt(`What tools do I have?`, ''))

// function AnyDevWork(availableTools) {
//     if(availableTools.includes('Google')) {
//         alert("I can do it.")
//     } else {
//         alert("I can't make any promises.")
//     }
// }