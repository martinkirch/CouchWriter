function (newDoc, existingDoc, userCtx) {
	
	function validate(object, message) {
		if (!object) {
			throw({forbidden : message});
		}
	}
	
	if (!userCtx) {
		throw({unauthorized : "You must be logged in to save something."});
	}
	
	// this one should be prevented by "urlFriendly" handlers
	if (!newDoc._id.match(/^[a-z0-9 \-',\.\"\:_]+$/i)) {
		throw({unauthorized : "Document identifiers must be made of letters, numbers, spaces and : _ - ' \. \" ,"});
	}
	
	if (existingDoc && newDoc.type != existingDoc.type) {
		throw({forbidden : "Document's \"type\" field can't be changed."});
	}
	
	switch (newDoc.type) {
		case "article" :
			validate(newDoc.created_at, "Creation timestamp is not set.");
			validate(newDoc.content,    "Article's content is missing.");
			
			if (newDoc.tags) {
				for (var i = newDoc.tags.length - 1; i >= 0; i--){
					if (!newDoc.tags[i].match(/^[a-z0-9 \-',\.\"\:_]+$/i)) {
						throw({unauthorized : "Tags must be made of letters, numbers, spaces and : _ - ' \. \" ,"});
					}
				};
			}
			
			break;
		default :
			throw({forbidden : "Invalid \"type\" field."});
			break;
	}
}