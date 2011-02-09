function () {
	var self = this;
	$('article').bind('loaded', function(event, metadata) {
		var keywords;
		if (metadata.keywords) {
			keywords = metadata.keywords.join(', ');
		} else {
			keywords = "";
		}
		$('input[name="keywords"]', self).val(keywords);
	});
}