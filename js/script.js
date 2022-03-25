$(function() {
	$('.main__slider').slick({
		speed: 1200,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		variableWidth: true,
		prevArrow: '<button><img src="icons/arrow-left.svg" alt="" class="arrow-left"></button>',
		nextArrow: '<button><img src="icons/arrow-right.svg" alt="" class="arrow-right"></button>',
	});
});