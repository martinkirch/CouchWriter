function () {
	if ( !$$('header').baseHeight ) {
		$$('header').baseHeight = $('header').css('height');
	}
	
	var futureHeight,futureOverflow;
	
	if ( $$(this).isDown ) {
		$$(this).isDown = false;
		futureHeight    = $$('header').baseHeight
		futureOverflow  = 'hidden';
	} else {
		$$(this).isDown = true;
		futureHeight    = '80%';
		futureOverflow  = 'auto';
	}
	
	$('header').css('overflow', futureOverflow);
	
	$('header').animate({'height':futureHeight}, 'slow', "swing", function(){
		$('a.topPanelToggler').each(function() {
			$(this).html(
				$$(this).isDown ? '^' : 'v' 
			);
		});
	});
}