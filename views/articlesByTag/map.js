function(doc) {
  if (doc.type == 'article' && doc.tags) {
		doc.tags.forEach(function (tag) {
			emit(tag, 1);
		});
  }
}