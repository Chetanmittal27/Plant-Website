const hamburger = document.getElementById('hamburger');
const nav_menu = document.getElementById('nav-menu');
const nav_link = document.getElementsByClassName('nav-link');


hamburger.addEventListener('click' , () => {
    nav_menu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});

Array.from(nav_link).forEach((link) => {
    link.addEventListener('click' , () => {
        nav_menu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line");
    })
})