import {
    header,
    swiper
} from '../elements';

const headerSelf = header.self;
const logo = header.logo;
const swiperContainer = swiper.container;
// const swiperWrapper = swiper.wrapper;
// const swiperSlide = Array.from(swiper.slide);

if (swiperContainer !== null) {
    logo.classList.add('none');
}

if (swiperContainer === null) {
    headerSelf.style.backgroundColor = '#f8f3e6';
}