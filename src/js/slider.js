$(document).ready(function() {


	$('.slider__post').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 20000,
	prevArrow: $('.js-page__back'),
	nextArrow: $('.js-page__next')
});

});