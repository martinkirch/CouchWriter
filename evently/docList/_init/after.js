function () {
	var list = $(this);
	$$(this).app.db.allDocs({
		startkey : "_design0", 
    success : function(data) {
			list.trigger('docListReceived', data);
    }
  });
}