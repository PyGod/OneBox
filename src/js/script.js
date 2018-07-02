
$(()=>{	
//Toggle button animation
	$('.open-icon').click(()=>{
		$('.open-icon').toggleClass('active');
		$('.open-icon').css('visibility', 'hidden');
		$('.open-menu').css('visibility', 'hidden');
		$('.sidebar-wrap').css('left', '0px');
		$('.sidebar-wrap').css('overflow-y', 'hidden');
		$('.sidebar').css('right', '0px');
	})
//Sidebar animation
	$('.sidebar-wrap').click(()=> {
		$('.sidebar-wrap').css('left', '100%');
		$('.sidebar').css('right', '-100%');
		$('.open-icon').css('visibility', 'visible');
		$('.open-menu').css('visibility', 'visible');
		$('.open-icon').removeClass('active');
		
	});

	$('.select-field ul li').on('click', function() {
		var label = $(this).parent().parent().children('label');
		label.attr('data-value', $(this).attr('data-value'));
		label.html($(this).html());
		$('.header-left a').css('outline', 'none');
		$('.header-left a').css('color', '#000');
	})

})