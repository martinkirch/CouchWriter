function(event) {
	var keywords;
	var rawKeywords = $(this).val();
		
	if (rawKeywords.trim().length == 0) {
		keywords = [];
	} else {
		keywords = $.map(rawKeywords.split(','), function(word) {
			word = word.trim();
			return word.length == 0 ? null : word.toLowerCase(); 
		});
	}
	
	$("#keywordsEditor").trigger('changed', [keywords]);
}