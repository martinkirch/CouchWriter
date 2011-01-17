function (event) {
	// let go Enter, Backspace and non-key related events
	if (!event.which || event.which == 13 || event.which == 8) {
		return;
	}
	
	var typed = String.fromCharCode(event.which);
	
	// will be ensured by the validation function anyway
	if (!typed.match(/^[a-z0-9 \-',\.\"\:_]$/i)) {
		event.preventDefault();
		$.gritter.add({
			title: 'Information',
			text: "Article identifiers and tags must be made of letters, numbers, spaces and : _ - ' \. \" ,",
			time: 3000
		});
	}
}