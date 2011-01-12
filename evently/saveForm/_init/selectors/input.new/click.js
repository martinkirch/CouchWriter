function (e) {
	e.preventDefault();
	
	$('#saveForm_id').val('');
	
	$('article').trigger('new');
}