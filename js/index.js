(function($) {

	$(window).scroll(function() {

		$(window).scroll(function() {
			space = $(window).innerHeight() - $('.fab').offsetTop + $('.fab').offsetHeight;
			if(space < 200){
				$('.fab').css('margin-bottom', '150px');
			}
		})

	});

})(jQuery);

$( document ).ready(function(){
	$(".dropdown-button").dropdown();
	$(".dropdown-button1").dropdown();
	$(".button-collapse").sideNav();
	$('.parallax').parallax();

	$(function () {
			var options = {
				width: 4,

					cellHeight: 150,
					verticalMargin: 10,
			};
			$('.grid-stack').gridstack(options);
	});
});
