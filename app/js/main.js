$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });
});

$('.slider').slick({
    slidesToShow: 0.6,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '33%',
});
