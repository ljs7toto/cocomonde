//jQuery to collapse the navbar on scroll
$(window).scroll(function () { 
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
		$(".tabs li").addClass("tabs_heigth");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
		$(".tabs li").removeClass("tabs_heigth");
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$(document).on('click', 'a.page-scroll', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

