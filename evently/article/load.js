function (event, docId) {
	var self = this;
	
	$$(this).app.db.openDoc(docId, {
    success : function(data) {
			$(self).html(data.content);
			$$(self)._rev = data._rev;
			$$(self)._id = docId;
			$$(self).keywords = data.keywords ? data.keywords : [];
						
			$(self).trigger('loaded', $$(self));
    }
  });
}