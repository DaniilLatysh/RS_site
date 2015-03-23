$(function(){
	$('.top-menu a:eq(0)').bind('mouseover', function(){
		$('.header').css('background', 'url("../images/bg5.jpg") 65% 47%');
	});
	
	$('.top-menu a:eq(0)').bind('mouseout', function(){
		$('.header').css('background', 'url("../images/footer.jpg")65% 47%');
	});
});

//написать функцию смену ЬГ по клику