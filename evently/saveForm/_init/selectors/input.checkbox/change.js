function (){
		
	if ($$(this).timer == undefined) {
		
		$$(this).timer = window.setInterval(function() {
			$('article').trigger('save', { doNotice : false } );
		}, 60000);
		
	} else {
		window.clearInterval($$(this).timer);
		$$(this).timer = undefined;
	}
};