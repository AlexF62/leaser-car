const tabItem = document.querySelectorAll('.tabs__button-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(el => el.addEventListener('click', open));

function open(event) {
    const tabTarget = event.currentTarget;
    tabItem.forEach((elem) => elem.classList.remove('tabs__button-item--active'));
    tabTarget.classList.add('tabs__button-item--active');
}

const menuBtn = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => menu.classList.toggle('menu__list--active'))

const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },

});