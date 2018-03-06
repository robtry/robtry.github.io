$(document).ready(function(){
	$('#intro-paragraph').slideDown(900);

	$(window).scroll(function() {
		indexParticles ();
	});

	function indexParticles () {
		var alt = $("#particles").height() - $("nav").height();
		if ($(window).scrollTop() < alt) {
			$("#particles").removeClass("particles-pinned");
		}
		else {
			$("#particles").addClass("particles-pinned");
		}
	};
	/*==========Animated Scroll==========*/
	$(".to-home").click(function(){
		$("html, body").animate({ scrollTop: $('#home').offset().top }, 950);
	});
	$(".to-skills").click(function(){
		$("html, body").animate({ scrollTop: $('#skills').offset().top }, 950);
	});
	$(".to-projects").click(function(){
		$("html, body").animate({ scrollTop: $('#projects').offset().top }, 950);
	});
	$(".to-contact").click(function(){
		$("html, body").animate({ scrollTop: $('#contact').offset().top }, 950);
	});
	/*=================================*/
	$('.material-card > .mc-btn-action').click(function () {
		var card = $(this).parent('.material-card');
		var icon = $(this).children('i');
		icon.addClass('fa-spin-fast');

		if (card.hasClass('mc-active')) {
			card.removeClass('mc-active');
			window.setTimeout(function() { icon.removeClass('fa-spin-fast') }, 800);
			icon.removeClass('fa-arrow-left');
			icon.addClass('fa-bars');
			//console.log("active");

		}
		else {
			card.addClass('mc-active');	
			window.setTimeout(function() { icon.removeClass('fa-spin-fast') }, 800);
			icon.removeClass('fa-bars');
			icon.addClass('fa-arrow-left');
			//console.log("unactive");
		}
	});

	$('.tooltipped').tooltip({delay: 50});
});
