function (e) {
	e.preventDefault();
	
	var keyword = $(this).html();
	
	$$(this).app.view('articlesByKeyword', {
		key : keyword,
		reduce : false,
		success : function(data) {
			data.title = 'Articles labelled #' + keyword;
			$("#articlesBrowser").trigger('load', [data]);
		}
	});
}