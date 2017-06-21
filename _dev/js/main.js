/**
 * Created by Pompo on 18.06.2017.
 */

function mobileMenu(){
    var mobileBtn = $('.js-mobile'),
        mobileMenu = $('.js-mobile-menu');

    $(mobileBtn).click(function(){
        $(this).toggleClass('open');
        $(mobileMenu).toggleClass('is-open');
    })
}

function swiperInit() {
    var mySwiper = new Swiper ('#img-slide', {
        direction: 'horizontal',
        loop: true,
        autoplay: 4000,
        pagination: '.swiper-pagination',
        paginationClickable: true
    })
}

$(document).ready(function(){
    mobileMenu();
    swiperInit();
});