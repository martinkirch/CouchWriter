function (newDoc, existingDoc, userCtx) {
	
	function validate(object, message) {
		if (!object) {
			throw({forbidden : message});
		}
	}
	
	function validateContent(content) {
		var pos = content.indexOf("<");
		
		while (pos != -1) {
			if (content.charAt(++pos) == '/') {
				pos++;
			}
			
			// forget paragraphs...
			if (content.charAt(pos) != 'p') {
				var keyword = content.substr(pos, 3);
				
				switch (keyword) {
					case "scr": // script
					case "!--": // comments
					case "app": // applet
					case "bas": // base
					case "bod": // body
					case "for": // form
					case "fra": // frame(set)
					case "ifr": // iframe
					case "htm": // html
					case "lin": // link
					case "nof": // noframes
					case "nos": // noscript
					case "obj": // object
					case "sty": // style
						throw({unauthorized : "Unauthorized HTML tags found in document's content."});
				}
			}
			
			pos = content.indexOf("<", ++pos);
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
			
			if (newDoc.keywords) {
				for (var i = newDoc.keywords.length - 1; i >= 0; i--){
					if (!newDoc.keywords[i].match(/^[a-z0-9 \-',\.\"\:_]+$/i)) {
						throw({unauthorized : "Keywords must be made of letters, numbers, spaces and : _ - ' \. \" ,"});
					}
				};
			}
			
			validateContent(newDoc.content);
			break;
		default :
			throw({forbidden : "Invalid \"type\" field."});
			break;
	}
}