import Swiper from 'swiper';

new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    // spaceBetween: 30,
    speed: 1000,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})