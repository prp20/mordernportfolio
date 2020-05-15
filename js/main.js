//select the dom elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menunav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(function (item) {
            item.classList.add('show');
        });
        //set menu state
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menunav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(function (item) {
            item.classList.remove('show');
        });
        //set menu state
        showMenu = false;
    }
}