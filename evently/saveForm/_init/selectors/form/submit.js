function (event) {
	event.preventDefault();
	
	var idInput = $('input[type=text]',this);
	var id = idInput.val();
	
	if (id.length == 0) {
		idInput.val("Please enter an ID!");
		var container = this;
		setTimeout( function () { idInput.val(''); } , 2000);
		return;
	}
	
	$('article').trigger('save', id);
};