function (e) {
	e.preventDefault();
	
	var tag = $(this).html();
	
	$$(this).app.view('articlesByTag', {
		key : tag,
		reduce : false,
		success : function(data) {
			data.title = 'Articles tagged #' + tag;
			$("#docList").trigger('load', [data]);
		}
	});
}