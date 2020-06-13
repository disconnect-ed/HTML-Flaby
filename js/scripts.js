$(document).ready(function () {
    $('.about-slider').slick({
        dots: false,
        focusOnSelect: false,
        arrows: true,
        appendArrows: $('.about-arrows'),
        prevArrow: '<button id="prev" class="about__arrow about__arrow_prev">\n' +
            '<span></span> Previous\n' +
            '</button>',
        nextArrow: '<button id="next" class="about__arrow about__arrow_next">\n' +
            'Next <span></span>\n' +
            '</button>'
    });
});

