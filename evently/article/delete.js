function () {
	var docId = $$(this)._id;
		
	if (docId == undefined)
		return;
	
	doc = {
		_id : docId,
		_rev : $$(this)._rev,
		type : 'article'
	};
	
	var self = this;
	
	$$(this).app.db.removeDoc(doc, {
		success : function(data) {
			$$(self)._rev = undefined;
			$(self).trigger('deleted', [data]);
		}
  });
}