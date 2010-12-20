function (event) {
	event.preventDefault();
	
	if ( !$$('#top').baseHeight ) {
		$$('#top').baseHeight = $('#top').css('height');
	}
	
	var futureHeight,futureOverflow;
	
	if ( $$(this).isUp ) {
		$$(this).isUp  = false;
		futureHeight   = '80%';
		futureOverflow = 'auto';
	} else {	
		$$(this).isUp  = true;
		futureHeight   = $$('#top').baseHeight
		futureOverflow = 'hidden';
	}
	
	$('#top').css('overflow', futureOverflow);
	
	$('#top').animate({'height':futureHeight}, 'slow', "swing", function(){
		$('.btnPullDown').each(function() {
			$(this).trigger('toggle');
		});
	});
}