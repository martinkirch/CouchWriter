function (event, keywords) {
	
	if (keywords == undefined) {
		keywords = $$(this).keywords;
		
		if (keywords == undefined) {
			return;
		}
	} else {
		$$(this).keywords = keywords;
	}
	
	return {
		keywords : $.map(keywords, function(keyword) {
			return {
				keyword:keyword
			};
		})
	};
}