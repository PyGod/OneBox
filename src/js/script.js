
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

//Custom Select
$('.select-field').on('mousedown', function() {
	var label = $(this).parent().parent().children('label');
	label.attr('data-value', $(this).attr('data-value'));
	label.html($(this).html());
	$('.select-field').addClass('active');
})

$('.select-field').on('mouseover', function() {
	var label = $(this).parent().parent().children('label');
	label.attr('data-value', $(this).attr('data-value'));
	label.html($(this).html());
	$('.select-field').css({'box-shadow' : 'inset 0px 3px 3px 1px #dfe5ed', 'cursor' : 'pointer'});
})

$('.select-field').on('mouseout', function() {
	var label = $(this).parent().parent().children('label');
	label.attr('data-value', $(this).attr('data-value'));
	label.html($(this).html());
	$('.select-field').css('box-shadow' , '0px 3px 3px 1px #dfe5ed');
})

$('.select-field ul li').on('mouseup', function() {
	var label = $(this).parent().parent().children('label');
	label.attr('data-value', $(this).attr('data-value'));
	label.html($(this).html());
	$('.header-left a').css('color', '#000');
	$('.select-field').toggleClass('active', false);
})

})