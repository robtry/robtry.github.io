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
});
