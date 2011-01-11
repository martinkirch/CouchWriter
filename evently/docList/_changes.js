function (e) {
	$$(this).app.view('articlesByDate', {
	  descending : true,
	  limit : 10,
		success : function(data) {
			data.title = 'Recent articles';
			$("#docList").trigger('load', [data]);
		}
	});
}