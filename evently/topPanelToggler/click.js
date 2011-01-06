function (event) {
	if ( event.target != this)
		return;
	
	event.preventDefault();
	
	if ( !$$('#top').baseHeight ) {
		$$('#top').baseHeight = $('#top').css('height');
	}
	
	var futureHeight,futureOverflow;
	
	if ( $$(this).isDown ) {
		$$(this).isDown = false;
		futureHeight    = $$('#top').baseHeight
		futureOverflow  = 'hidden';
	} else {
		$$(this).isDown = true;
		futureHeight    = '80%';
		futureOverflow  = 'auto';
	}
	
	$('#top').css('overflow', futureOverflow);
	
	$('#top').animate({'height':futureHeight}, 'slow', "swing", function(){
		$('a.topPanelToggler').each(function() {
			$(this).html(
				$$(this).isDown ? '^' : 'v' 
			);
		});
	});
}