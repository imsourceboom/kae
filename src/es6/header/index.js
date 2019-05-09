import {
    header,
    swiper,
    aboutUs
} from '../elements';

const about = aboutUs.self;
const introduce = aboutUs.introduce;
const history = aboutUs.history;
const headerSelf = header.self;
const hamburger = header.hamburger;
const logo = header.logo;

const logoPink = `
    <a href="/index.html">
        <img src="/assets/images/logo.png" alt="logo"/>
    </a>
`;
const logoWhite = `
    <a href="/index.html">
        <img src="/assets/images/logo-white.png" alt="logo"/>
    </a>
`;

const swiperContainer = swiper.container;
// const swiperWrapper = swiper.wrapper;
// const swiperSlide = Array.from(swiper.slide);



/*
    index Page
*/

if (swiperContainer !== null) {
    logo.classList.add('none');
    logo.innerHTML = logoPink;
}

if (swiperContainer === null) {
    headerSelf.style.backgroundColor = '#f8f3e6';
}




/*
    About Page
*/

if (about !== null) {
    headerSelf.style.backgroundColor = 'rgba(255,255,255,0)';
    headerSelf.style.color = 'rgba(255,255,255,1)';

    logo.innerHTML = logoWhite;
    hamburger.classList.add('white');

    document.addEventListener('scroll', function () {
        const historyTop = history.getBoundingClientRect().top;
        const introduceTop = introduce.getBoundingClientRect().top;
        console.log(introduceTop);

        if (introduceTop < 0) {
            headerSelf.style.backgroundColor = 'rgba(0,0,0,.66)';
        } else if (introduceTop == 0 || introduceTop > 0) {
            headerSelf.style.backgroundColor = 'rgba(0,0,0,0)';
        }

        if (historyTop < 30) {
            headerSelf.style.backgroundColor = 'rgba(248, 243, 230, .88)';
            headerSelf.style.color = 'rgba(255, 30, 142, 1)';
            logo.innerHTML = logoPink;
            hamburger.classList.remove('white');
        } else {
            headerSelf.style.color = 'rgba(255, 255,255,1)';
            logo.innerHTML = logoWhite;
            hamburger.classList.add('white');
        }
    })
}