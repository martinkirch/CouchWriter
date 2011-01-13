function (event, options) {
	var docId;
	var doNotice = true;
	
	if (options != null) {
		if (typeof(options) != 'object') {
			docId = "" + options;
		} else {
			if (options._id)
				docId = options._id;
			
			if (options.doNotice != undefined)
				doNotice = options.doNotice;
		}
	}
	
	if (docId == undefined) {
		docId = $$(this)._id;
		
		if (docId == undefined) {
			return;
		}
	} else {
		$$(this)._id = docId;
	}
	
	$(this).trigger('_save', [docId, doNotice]);
}