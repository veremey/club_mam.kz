$(document).ready(function() {


	$('.slider__post').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 20000,
	prevArrow: $('.js-page__back'),
	nextArrow: $('.js-page__next'),
	responsive: [
	// {
	// 	breakpoint: 1950,
	// 	settings: 'unslick',
	// },
	{
		breakpoint: 950,
		settings: {
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 650,
		settings: {
			slidesToShow: 1,
		}
	},

	]
});

$('.triger__post').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 20000,
	prevArrow: $('.js-page__back'),
	nextArrow: $('.js-page__next'),
	responsive: [
	{
		breakpoint: 9500,
		settings: 'unslick',
	},
	{
		breakpoint: 650,
		settings: {
			slidesToShow: 1,
		}
	},

	]
});

$('.riger__post').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 15000,
	prevArrow: $('.js-riger__back'),
	nextArrow: $('.js-riger__next'),
	responsive: [
	{
		breakpoint: 9500,
		settings: 'unslick',
	},
	{
		breakpoint: 650,
		settings: {
			slidesToShow: 1,
		}
	},

	]
});

});