function (event, docId) {
	var self = this;
	
	$$(this).app.db.openDoc(docId, {
    success : function(data) {
			$(self).html(data.content);
			$$(self)._rev = data._rev;
			$$(self)._id = docId;
			$('input[name=id]', '#saveForm').val(docId);
			$('#tagsInput').val(data.tags ? data.tags.join(', ') : '');
    }
  });
}