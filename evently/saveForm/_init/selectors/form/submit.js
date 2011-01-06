function (event) {
	event.preventDefault();
	
	var doc = {
    created_at : new Date(),
		content : $('article').html(),
		_id : $('input[type=text]').val()
  };

	if ($$('article')._rev) {
		doc._rev = $$('article')._rev;
	}

  $$(this).app.db.saveDoc(doc, {
    success : function(data) {
			$.gritter.add({
				title: 'Saved!',
				text: '"' + data.id +'" has been saved.',
				time: 3000
			});
		
			$$('article')._rev = data.rev;
    }, 
		error : function(status, error, reason) {
			$.gritter.add({
				title: 'ERROR',
				text: "The document could not be saved : " + reason,
				time: 3000
			});
		}
  });
};