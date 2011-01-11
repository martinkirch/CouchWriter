function (event) {
	event.preventDefault();
	
	var doc = {
    created_at : new Date(),
		content : $('article').html(),
		_id : $('input[type=text]').val(),
		type : 'article'
  };

	if ($$('article')._rev) {
		doc._rev = $$('article')._rev;
	}
	
	doc.tags = $.map($('#tagsInput').val().split(','), function(tag) { return tag.trim().toLowerCase(); });

  $$(this).app.db.saveDoc(doc, {
    success : function(data) {
			$.gritter.add({
				title: 'Saved!',
				text: '"' + data.id +'" has been saved.',
				time: 3000
			});
		
			$$('article')._rev = data.rev;
		}
  });
};