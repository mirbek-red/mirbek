$(document).ready(function(){
	$('.menu_btn').on('click',function(e){
		e.preventDefault();
		$('.middle').toggleClass('middle-active');
		$('.menu_list').toggleClass('menu_list-active')
	})
})