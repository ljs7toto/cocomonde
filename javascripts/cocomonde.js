//메뉴
$(function () {
	$('#menu_btn').click(function () {
		var on = $('#menu_btn').attr('class');
		if (on === 'active') {
			$(this).removeClass('active');
			$('#menu').removeClass('active');

		} else {
			$(this).addClass('active');
			$('#menu').addClass('active');

		}
	});
	$('#menu ul li a').click(function () {
		$('#menu').removeClass('active');
	});
});


// TOP 버튼
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#topbtn').fadeIn();
		} else {
			$('#topbtn').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#topbtn a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});
//TOP BUTTON END
/*애니메이션 베이비 오일 부분 * /
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 4944) {
			$('.waterwrap div').addClass('waterfull');
			setTimeout(function () {
				$('.coconut').attr({
					src: $('.coconut').attr('data-other-src')
				});
			}, 1000);
			setTimeout(function () {
				$('.hohoba').attr({
					src: $('.hohoba').attr('data-other-src')
				});
			}, 2000);
			setTimeout(function () {
				$('.abocado').attr({
					src: $('.abocado').attr('data-other-src')
				});
			}, 3000);
			setTimeout(function () {
				$('.dalmagi').attr({
					src: $('.dalmagi').attr('data-other-src')
				});
			}, 4000);
		}
	});
});
/*/
/*애니메이션 맘 오일 부분* /
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 6744) {
			$('.waterwrap2 div').addClass('waterfull2');
			setTimeout(function () {
				$('.coconut2').attr({
					src: $('.coconut2').attr('data-other-src')
				});
			}, 1000);
			setTimeout(function () {
				$('.hohoba2').attr({
					src: $('.hohoba2').attr('data-other-src')
				});
			}, 2000);
			setTimeout(function () {
				$('.mandarin').attr({
					src: $('.mandarin').attr('data-other-src')
				});
			}, 3000);
			setTimeout(function () {
				$('.rose').attr({
					src: $('.rose').attr('data-other-src')
				});
			}, 4000);
			setTimeout(function () {
				$('.argan').attr({
					src: $('.argan').attr('data-other-src')
				});
			}, 6000);
		}
	});
});
/* //애니메이션 맘 오일 부분*/

/*애니메이션 베이비 오일 부분*/
$(function () {

	$('.bottle').on('click', function () {
		$('.waterwrap div').addClass('waterfull');
		setTimeout(function () {
			$('.coconut').attr({
				src: $('.coconut').attr('data-other-src')
			});
		}, 1000);
		setTimeout(function () {
			$('.hohoba').attr({
				src: $('.hohoba').attr('data-other-src')
			});
		}, 2000);
		setTimeout(function () {
			$('.abocado').attr({
				src: $('.abocado').attr('data-other-src')
			});
		}, 3000);
		setTimeout(function () {
			$('.dalmagi').attr({
				src: $('.dalmagi').attr('data-other-src')
			});
		}, 4000);
	});
});
/*//애니메이션 베이비 오일 부분*/
/*애니메이션 맘 오일 부분*/
$(function () {
	$('.bottle2').on('click', function () {
		$('.waterwrap2 div').addClass('waterfull2');
		setTimeout(function () {
			$('.coconut2').attr({
				src: $('.coconut2').attr('data-other-src')
			});
		}, 1000);
		setTimeout(function () {
			$('.hohoba2').attr({
				src: $('.hohoba2').attr('data-other-src')
			});
		}, 2000);
		setTimeout(function () {
			$('.mandarin').attr({
				src: $('.mandarin').attr('data-other-src')
			});
		}, 3000);
		setTimeout(function () {
			$('.rose').attr({
				src: $('.rose').attr('data-other-src')
			});
		}, 4000);
		setTimeout(function () {
			$('.argan').attr({
				src: $('.argan').attr('data-other-src')
			});
		}, 6000);
	});
});
/*//애니메이션 맘 오일 부분*/

/*tab*/
$(function () {
	$(".tab_content").hide();
	$(".tab_content:first").show();
	$("ul.tabs li").click(function () {
		$("ul.tabs li").removeClass("active").css("color", "#333");
		//$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
		$(this).addClass("active").css("color", "darkred");
		$(".tab_content").hide()
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});
});

