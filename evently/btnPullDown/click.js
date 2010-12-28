function (event) {
	event.preventDefault();
	
	if ( !$$('#top').baseHeight ) {
		$$('#top').baseHeight = $('#top').css('height');
	}
	
	var futureHeight,futureOverflow;
	
	if ( $$(this).isDown ) {
		$$(this).isDown  = false;
		futureHeight   = $$('#top').baseHeight
		futureOverflow = 'hidden';
	} else {
		$$(this).isDown  = true;
		futureHeight   = '80%';
		futureOverflow = 'auto';
	}
	
	$('#top').css('overflow', futureOverflow);
	
	$('#top').animate({'height':futureHeight}, 'slow', "swing", function(){
		$('.btnPullDown').each(function() {
			$(this).trigger('toggle');
		});
		
		if ( $$('.btnPullDown').isDown ) {
			$("#top").one('click', function () {
				$('.btnPullDown').first().trigger('click');
			});
		}
	});
}