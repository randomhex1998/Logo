const menu = document.querySelector('.menu-area');
const coll = document.querySelector('.col');
coll.addEventListener('click', () => {
    coll.classList.toggle('click');
    menu.classList.toggle('menu-active');
})