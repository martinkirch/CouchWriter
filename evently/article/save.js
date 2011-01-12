function (event, docId) {
	
	if (docId == undefined) {
		docId = $$(this)._id;
		
		if (docId == undefined) {
			return;
		}
	} else {
		$$(this)._id = docId;
	}
	
	var doc = {
    created_at : new Date(),
		content : $(this).html(),
		_id : docId,
		type : 'article'
  };

	if ($$(this)._rev) {
		doc._rev = $$(this)._rev;
	}
	
	doc.tags = $.map($('#tagsInput').val().split(','), function(tag) { return tag.trim().toLowerCase(); });

	var self = this;

  $$(this).app.db.saveDoc(doc, {
    success : function(data) {
			$.gritter.add({
				title: 'Saved!',
				text: '"' + data.id +'" has been saved.',
				time: 3000
			});
		
			$$(self)._rev = data.rev;
		}
  });
}