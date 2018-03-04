$(document).ready(function(){
	$(window).scroll(function() {
		indexParticles ();
		//parallaxScroll();
	});

	function indexParticles () {
		var alt = $("#particles").height() - $("nav").height();
		if ($(window).scrollTop() < alt) {
			$("#particles").removeClass("particles-pinned");
			$("#particles").addClass("mask");
		}
		else {
			$("#particles").addClass("particles-pinned");
			$("#particles").removeClass("mask");
		}
	};
	/*==========Animated Scroll==========*/
	$(".to-home").click(function(){
		$("html, body").animate({ scrollTop: $('#home').offset().top }, 800);
	});
	$(".to-skills").click(function(){
		$("html, body").animate({ scrollTop: $('#skills').offset().top }, 800);
	});
	$(".to-projects").click(function(){
		$("html, body").animate({ scrollTop: $('#projects').offset().top }, 800);
	});
	$(".to-contact").click(function(){
		$("html, body").animate({ scrollTop: $('#contact').offset().top }, 800);
	});
	/*=================================*/
});
