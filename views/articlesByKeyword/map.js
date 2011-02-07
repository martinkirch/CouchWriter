function(doc) {
  if (doc.type == 'article' && doc.keywords) {
		doc.keywords.forEach(function (keyword) {
			emit(keyword, 1);
		});
  }
}