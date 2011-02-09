function (event) {
	if ( event.target != this)
		return;
	
	event.preventDefault();
	
	$(this).trigger('toggle');
}