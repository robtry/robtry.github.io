$(document).ready(function(){
	$('.target').pushpin({
		top: 0,
		bottom: 1000,
		offset: 0
	});
	$('.pushpin-demo-nav').each(function() {
		var $this = $(this);
		var $target = $('#' + $(this).attr('data-target'));
		$this.pushpin({
			top: $target.offset().top,
			bottom: $target.offset().top + $target.outerHeight() - $this.height()
		});
	});

	$(".to-home").click(function(){
		$("html, body").animate({ scrollTop: $('#home').offset().top }, 800);
	});
	$(".to-about").click(function(){
		$("html, body").animate({ scrollTop: $('#about').offset().top }, 800);
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
});
