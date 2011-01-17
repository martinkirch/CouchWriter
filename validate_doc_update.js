function (newDoc, existingDoc, userCtx) {
	
	function validate(object, message) {
		if (!object) {
			throw({forbidden : message});
		}
	}
	
	if (!userCtx) {
		throw({unauthorized : "You must be logged in to save something."});
	}
	
	if (existingDoc && newDoc.type != existingDoc.type) {
		throw({forbidden : "Document's \"type\" field can't be changed."});
	}
	
	switch (newDoc.type) {
		case "article" :
			validate(newDoc.created_at, "Creation timestamp is not set.");
			validate(newDoc.content,    "Article's content is missing.");
			break;
		default :
			throw({forbidden : "Invalid \"type\" field."});
			break;
	}
}