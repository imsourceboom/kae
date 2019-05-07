import {
    header
} from '../elements';
import Swiper from 'swiper';

const headerSelf = header.self;


const mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    // spaceBetween: 30,
    speed: 1000,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // on: {
    //     init: function () {
    //         console.log('changed')
    //     }
    // }
})

mySwiper.on('slideChange', function () {
    // console.log('slide Changed!!')
    // console.log(this);
    // console.log(this.realIndex);
    // console.log(this.slides);

    if (this.realIndex === 0) {
        headerSelf.style.color = 'rgba(255, 30, 142, 1)';
    }
    if (this.realIndex === 1 || this.realIndex === 5) {
        headerSelf.style.color = 'rgba(0,0,0, 1)';
    }
    if (this.realIndex === 2 || this.realIndex === 3 || this.realIndex === 4 || this.realIndex === 6 || this.realIndex === 7) {
        headerSelf.style.color = 'rgba(255,255,255, 1)';
    }
})