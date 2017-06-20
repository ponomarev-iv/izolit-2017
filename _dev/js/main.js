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

$(document).ready(function(){
    mobileMenu();
});