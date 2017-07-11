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

function initPopup(){
    $('.js-popup-img').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
}

$(document).ready(function(){
    mobileMenu();
    swiperInit();
    initPopup();
});