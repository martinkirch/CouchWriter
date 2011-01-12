function(doc) {
  if (doc.type == 'article' && doc.tags) {
		doc.tags.forEach(function (tag) {
			if (tag.length > 0)
				emit(tag, 1);
		});
  }
}