

jQuery(document).ready(function($) {

	$('.trigger-toggle-func').click(function(e) {
		e.preventDefault();

		var trigger = $(this),
			currText = trigger.text(),
			currStatus = trigger.hasClass('status-on') ? true : false,
			targetId = trigger.data('target-id');

		// Toggle button text
		if(currStatus == true) {
			trigger.removeClass('status-on').addClass('status-off');
		} else {
			trigger.removeClass('status-off').addClass('status-on');
		}

		// Toggle functionality
		var target = targetId == 'split-3' ? $('.split-3 .column') : $('.split-5 .column');

		if(currStatus == 1) {
			target.disableEqualHeight();
		} else {
			target.equalHeight( targetId == 'split-3' ? 'myFirstGroup' : 'anotherGroup' );
		}


	});

});