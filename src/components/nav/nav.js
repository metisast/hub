$(function () {

    var navMobile = $('.nav-mobile');
    var close = $('.nav-mobile__close');
    var burger = $('.nav-line__burger');
    var subs = $('.nav-mobile__sub');
    var arrows = $('.nav-mobile__arrow');

    close.on('click', function () {
        navMobile.fadeOut('fast');
    });

    burger.on('click', function () {
        navMobile.fadeIn('fast');
    })

    arrows.on('click', function () {
        var arrow = $(this);
        var link = arrow.closest('.nav-mobile__link');
        var sub = link.next();
        sub.slideToggle('fast');
    });

});