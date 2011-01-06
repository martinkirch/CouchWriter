function () {
	if ($$(this).isDown) {
		$(this).html('^');
	} else {
		$(this).html('v');
	}
}