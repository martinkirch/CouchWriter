function (){
	$('input.checkbox', this).trigger('change');
	
	$('article').bind('loaded', function (event, metadata) {
		$('input[name=id]').val(metadata._id ? metadata._id : '');
	});
};