/*global $, document, window*/
$(document).ready(function () {
    
    "use strict";
    
	$(window).scroll(function () {
    
		if ($(window).scrollTop() > 60) {

			$('nav').css({
				'position': 'fixed',
				'backgroundColor': '#fff',
				'boxShadow': '0 0 10px #ccc'
			});

			$('.navbar-inverse .navbar-brand, .navbar-inverse .navbar-nav > li > a').css('color', '#3d3d3d');

		} else {

			$('nav').css({
				'position': 'absolite',
				'backgroundColor': 'transparent',
				'boxShadow': 'none'
			});

			$('.navbar-inverse .navbar-brand, .navbar-inverse .navbar-nav > li > a').css('color', '#fff');


		}

		
	});

	$('.gear').click(function () {

		var hideBox = '-' + $('.tool-box').innerWidth();

		$('.tool-box').toggleClass('box');
		if ($('.tool-box').hasClass('box')) {

			$('.tool-box').animate({
				left: 0
			}, 800);
		} else {

			$('.tool-box').animate({
				left: hideBox
			}, 800);
		}
	});

    $('.my-color ul li').click(function () {
        $("link[href*='theme']").attr('href', $(this).attr('data-theme'));
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {

            $('.scroll-up').fadeIn(400);
        } else {
            $('.scroll-up').fadeOut(400);
        }
    });

    $('.scroll-up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    
    // loading
    $(window).on('load', function () {


        $('.sk-cube-grid').delay(2500).hide(500);

        $('.loading').delay(3000).fadeOut(500, function () {

            $('.loading').remove();

            $('body').css('overflow', 'auto');

        });


    });




});


