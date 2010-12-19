function () {
	var form = this;
	var doc = {
    created_at : new Date(),
		content : $('#content').html(),
		_id : $('input[type=text]').val()
  };
  $$(this).app.db.saveDoc(doc, {
    success : function() {
      $.gritter.add({
				title: 'Saved!',
				text: '"' + doc._id +'" has been saved.',
				time: 3000
			});
    }
  });
  return false;
};