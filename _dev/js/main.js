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
    if($('#img-slide').length){
        var mySwiper = new Swiper ('#img-slide', {
            direction: 'horizontal',
            loop: true,
            autoplay: 4000,
            pagination: '.swiper-pagination',
            paginationClickable: true
        })
    }

    else return false;

}

function initPopup(){
    if($('.js-popup-img').length){
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
}

function activateNavMenu(){
        if ($('.nav__wrap').length){
            var menuLink = $('.nav__wrap').children('.nav__link');

            $(menuLink).each(function () {
                var location = window.location.href;
                var link = this.href;
                if(location == link) {
                    $(this).addClass('is-active');
                }
            });
        }
        else return false;
}

function initPopupForm(){
    $('.js-popup-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
}

if ($('#popup-form').length){
    var v = $('#popup-form');
    sendForm(v);
}

if ($('#contact-form').length){
    var v = $('#contact-form');
    sendForm(v);
}

function sendForm(v) {
    $(v).submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами.");
            $(v).trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });
}

$(document).ready(function(){
    mobileMenu();
    activateNavMenu();
    swiperInit();
    initPopup();
    initPopupForm();
});