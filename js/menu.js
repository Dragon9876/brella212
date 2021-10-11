let menu_btn     = document.querySelector('.demo__responsive');
let menu         = document.querySelector('.navbar');
let cancel_btn   = document.querySelector('.navbar__cancel');
let navbar_links = document.querySelectorAll('.navbar__list-link');

console.log(menu_btn);


menu_btn.addEventListener('click', () => {
    menu.classList.add('navbar__active');
});

cancel_btn.addEventListener('click', () => {
    menu.classList.remove('navbar__active');
});

console.log(navbar_links);

navbar_links.forEach(item_link => {
    item_link.addEventListener('click', () => {
        menu.classList.remove('navbar__active');
    })
});





