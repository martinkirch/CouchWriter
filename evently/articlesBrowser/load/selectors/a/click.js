function (e) {
	e.preventDefault();
	
	$("article").trigger('load', [$(this).html()]);
	
	$('.topPanelToggler').first().trigger('click');
}