function(doc) {
  if (doc.type == 'article' && doc.created_at) {
    emit(doc.created_at, null);
  }
}