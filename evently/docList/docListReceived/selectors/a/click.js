function (e) {
	e.preventDefault();
	
	$("#content").trigger('load', [$(this).html()]);
}