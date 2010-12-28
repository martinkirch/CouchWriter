function (event, docId) {
	$$(this).app.db.openDoc(docId, {
    success : function(data) {
			$('#content').html(data.content);
    }
  });
}