function (event, docId, doNotice) {
	var doc = {
    created_at : new Date(),
		content : $(this).html(),
		_id : docId,
		type : 'article'
  };

	if ($$(this)._rev) {
		doc._rev = $$(this)._rev;
	}
	
	rawKeywords = $('#keywordsInput').val();
	
	if (rawKeywords.trim().length == 0) {
		doc.keywords = [];
	} else {
		doc.keywords = $.map( rawKeywords.split(','), function(keyword) {
			return keyword.trim().toLowerCase(); 
		});
	}

	var self = this;

  $$(this).app.db.saveDoc(doc, {
    success : function(data) {
			if (doNotice) {
				$.gritter.add({
					title: 'Saved!',
					text: '"' + data.id +'" has been saved.',
					time: 3000
				});
			}
		
			$$(self)._rev = data.rev;
		}
  });
}