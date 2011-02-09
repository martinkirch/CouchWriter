function (){
	
	var self = this;
	
	function turnTimerOff() {
		window.clearInterval($$(self).timer);
		$$(self).timer = undefined;
	}
		
	if ($$(this).timer == undefined) {
		
		$$(this).timer = window.setInterval(function() {
			
			$('article').one('saved', function (e, data) { // callback inception !
				if (!data.ok) {
					turnTimerOff();
					$(self).attr('checked', false);
					$.log("Auto-save failure : " + data.reason);
				}
			});
			
			$('article').trigger('save');
		}, 60000);
		
	} else {
		turnTimerOff();
	}
};