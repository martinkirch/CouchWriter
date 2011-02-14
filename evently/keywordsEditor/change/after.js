function () {
	// TODO makeEditable on all UL > LI > SPAN under this
	
	/*
	use
	$.fn.makeEditable = function(options) {
	    options = $.extend({
	      allowEmpty: true,
	      acceptLabel: "",
	      cancelLabel: "",
	      toolTip: "Double click to edit",
	      acceptOnBlur: true,

	      // callbacks
	      begin: function() { return true },
	      accept: function(newValue, oldValue) {},
	      cancel: function(oldValue) {},
	      createInput: function(value) { return $("<input type='text'>") },
	      prepareInput: function(input) {},
	      end: function(keyCode) {},
	      populate: function(value) { return value },
	      validate: function() { return true }
	    }, options || {});
	
	end: update $$(this).keywords , trigger change (no arguments)
	*/
	
	$(this).trigger('changed', [keywords]);
}