function (){
	$(this).html("<p>Edit me!</p>");
	
	$$(this)._rev = undefined;
	$$(this)._id = undefined;
	$$(this).keywords = [];
	
	$(this).trigger('loaded', $$(self));
}