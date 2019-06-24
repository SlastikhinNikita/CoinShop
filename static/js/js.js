$(document).ready(function(){
	new WOW().init();

	if($("body").scrollTop() > 99){
		$(".header_fixed").slideDown();
	}else{
		$(".header_fixed").hide();
	}
	
	$(document).on('scroll', function(){
		if($("body").scrollTop() > 99){
			$(".header_fixed").slideDown();
		}else{
			$(".header_fixed").slideUp();
		}
	});
	
	$(document).on('click', '.scroll_to', function(){
		var block = $(this).data('block');
		$('body, html').animate({ 'scrollTop': ($('#'+block).offset().top - 60) });
		$('.header_mobile').removeClass('opened');
		
		return false;
	});
	
	$(document).on('click', '.mobile_menu span, .mobile_menu .menu, .header_close', function(){
		$('.header_mobile').toggleClass('opened');
		
		return false;
	});
	
	var left = -60000;
	var timerId = setTimeout(function tick() {
		if(left < 0){
			left = parseInt(left) + 300;
		}
		$('.content_invest_list').css('left', left+'px');
		timerId = setTimeout(tick, 3000);
	}, 3000);

});