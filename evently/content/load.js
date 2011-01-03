function (event, docId) {
	$$(this).app.db.openDoc(docId, {
    success : function(data) {
			$('#content').html(data.content);
			$$('#content')._rev = data._rev;
			$('input[name=id]', '#saveForm').val(docId);
    }
  });
}