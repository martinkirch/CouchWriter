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
		
		$("#top").die('click');
		
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
			$("#top").live('click', function (event) {
				if ( event.target == this ) {
					$('.btnPullDown').first().trigger('click');
				}
			});
		}
	});
}