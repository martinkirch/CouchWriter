function (e) {
	e.preventDefault();
	
	if (confirm("Erase this document from the database ?"))
	{
		$('article').one('deleted', function(event, data) {
			if (data.ok) {
				$.gritter.add({
					title: 'Deleted',
					text: '"' + $$('article')._id +'" is no longer stored.',
					time: 3000
				});
			}
		});
		
		$('article').trigger('delete');
	}
}