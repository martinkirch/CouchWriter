function (event, docId) {
	$$(this).app.db.openDoc(docId, {
    success : function(data) {
			$('article').html(data.content);
			$$('article')._rev = data._rev;
			$('input[name=id]', '#saveForm').val(docId);
			$('#tagsInput').val(data.tags ? data.tags.join(', ') : '');
    }
  });
}