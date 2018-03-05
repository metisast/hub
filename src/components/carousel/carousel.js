$(function () {

    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                }
            },
        ]
    });

    $('.carousel-quattro').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                }
            },
        ]
    })

});