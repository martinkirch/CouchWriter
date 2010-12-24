function () {
	var list = $(this);
	$$(this).app.db.allDocs({
		startkey : "_design", 
    success : function(data) {
			list.trigger('docListReceived', data);
    }
  });
}