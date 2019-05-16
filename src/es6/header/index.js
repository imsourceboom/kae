import {
    header,
    swiper,
    aboutUs,
    italy,
    korea,
    detail
} from '../elements';

// about
const about = aboutUs.self;
const introduce = aboutUs.introduce;
const history = aboutUs.history;

// italy
const italyPortfolio = italy.self;

// korea
const koreaPortfolio = korea.self;

// detail
const detailPage = detail.self;

// Header
const headerSelf = header.self;
const hamburger = header.hamburger;
const logo = header.logo;

const logoPink = `
    <a href="/">
        <img src="/assets/images/logo.png" alt="logo"/>
    </a>
`;
const logoWhite = `
    <a href="/">
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
    // logo.classList.add('none');
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
        // console.log(introduceTop);

        if (introduceTop < 0 && introduceTop >= -100) {
            headerSelf.style.backgroundColor = 'rgba(0,0,0,.66)';
        } else if (introduceTop == 0) {
            headerSelf.style.backgroundColor = 'rgba(0,0,0,0)';
        }

        if (historyTop >= 0 && historyTop <= 40) {
            headerSelf.style.backgroundColor = 'rgba(248, 243, 230, .88)';
            headerSelf.style.color = 'rgba(255, 30, 142, 1)';
            logo.innerHTML = logoPink;
            hamburger.classList.remove('white');
        } else if (historyTop >= 41 && historyTop <= 80) {
            headerSelf.style.backgroundColor = 'rgba(0,0,0,.66)';
            headerSelf.style.color = 'rgba(255, 255,255,1)';
            logo.innerHTML = logoWhite;
            hamburger.classList.add('white');
        }
    });
}

/*
    italy, Korea Page
*/
if (italyPortfolio !== null || koreaPortfolio !== null) {
    logo.innerHTML = logoPink;
}


/*
    detail Page
*/
if (detailPage !== null) {
    logo.innerHTML = logoPink;
}