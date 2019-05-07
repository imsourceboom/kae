const doc = document;

export const body = {
    self: doc.querySelector('body')
}

export const header = {
    self: doc.querySelector('body > header'),
    logo: doc.querySelector('body > header figure '),
    nav: doc.querySelector('body > header nav'),
    li: doc.querySelectorAll('body > header nav ul li'),
    hamburger: doc.querySelector('body > header .hamburger'),
};

export const main = {
    self: doc.querySelector('body > main'),
    section: doc.querySelectorAll('body > main > section')
}

export const swiper = {
    container: doc.querySelector('body > main > .swiper-container'),
    wrapper: doc.querySelector('.swiper-container > .swiper-wrapper'),
    slide: doc.querySelectorAll('.swiper-container > .swiper-wrapper .swiper-slide')
}

console.log('Webpack On!!');