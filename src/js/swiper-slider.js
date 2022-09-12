import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

export const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    // preventClicksPropagation: false,
    setWrapperSize: true,
    spaceBetween: 10,
    speed: 500,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
