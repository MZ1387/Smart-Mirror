/**
 * Initializes your onload jquery functionalities here
 */
$(document).ready(function() {

    $(".emails-container").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst: true,
        vertical: true,
        adaptiveHeight: true,
        arrows: false
    });

});