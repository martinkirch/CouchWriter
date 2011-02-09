function (event, docId) {
	var doc = {
    created_at : new Date(),
		content : $(this).html(),
		_id : docId,
		type : 'article',
		keywords : $$(this).keywords
  };

	if ($$(this)._rev) {
		doc._rev = $$(this)._rev;
	}
	
	var self = this;

  $$(this).app.db.saveDoc(doc, {
    success : function(data) {
			$$(self)._rev = data.rev;
			$(self).trigger('saved', [data]);
		},
		error : function(status, error, reason) {
			$(self).trigger('saved', [{status:status, error:error, reason:reason}]);
		}
  });
}