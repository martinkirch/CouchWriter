function () {
	var docId = $$(this)._id;
		
	if (docId == undefined)
		return;
	
	if (!confirm("Erase this document from the database ?"))
		return;
	
	var self = this;
	
	doc = {
		_id : docId,
		_rev : $$(this)._rev
	};
	
	$$(this).app.db.removeDoc(doc, {
		success : function(data) {
			$.gritter.add({
				title: 'Deleted',
				text: '"' + docId +'" is no longer stored.',
				time: 3000
			});
		
			$$(self)._rev = undefined;
		}
  });
}