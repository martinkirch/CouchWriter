function (event, docId) {
	
	if (docId == null) {
		docId = $$(this)._id;
		
		if (docId == null) {
			return;
		}
	} else {
		docId = "" + docId;
		$$(this)._id = docId;
	}
	
	$(this).trigger('_save', [docId]);
}