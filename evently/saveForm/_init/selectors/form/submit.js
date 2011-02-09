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
	
	$('article').one('saved', function (e, data) {
		if (data.ok) {
			$.gritter.add({
				title: 'Saved!',
				text: '"' + data.id +'" has been saved.',
				time: 3000
			});
		} else {
			alert("The document could not be saved: " + data.reason); 
		}
	});
	
	$('article').trigger('save', [id]);
};