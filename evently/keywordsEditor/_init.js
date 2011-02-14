function () {
	var self = this;
	
	$('article').bind('loaded', function(event, metadata) {
		if (metadata.keywords) {
			$(self).trigger('change', [metadata.keywords]);
		}
	});
	
	$(this).trigger('change', [[]]);
}