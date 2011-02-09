function () {
	var self = this;
	$('#keywordsEditor').bind('changed', function(event, keywords) {
		$$(self).keywords = keywords;
	});
}