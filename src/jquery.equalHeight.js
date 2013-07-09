/*!
 * jQuery imagesLoaded Plugin v1.0
 * https://github.com/vobpler/jquery-imagesloaded
 *
 * Copyright 2013 Nicklas Sandell
 * Released under the MIT license
 */
jQuery(function($) {
	"use strict";

	// Bind resize events to document.ready, window.orientationchange and window.resize
	$(document).ready(resize);
	$(window).bind('orientationchange resize', resize);

	// jQuery hook for enabling plugin on group
	$.fn.equalHeight = function(id) {
		$(this).attr('data-equal-height', id);
		$(window).resize();
		return this;
	};

	// jQuery hook for disabling plugin for group
	$.fn.disableEqualHeight = function() {
		$(this).each(function() {
			$(this).removeAttr('data-equal-height').css('min-height', '0');
		});
		return this;
	};

	// Loops through all elements with the data-equal-height attribute, and
	// applies the resize function on each group found. It also makes sure
	// the resize function isn't applied multiple times per group.
	function resize() {
		var done = [];
		$('[data-equal-height]').each(function() {
			var elem = $(this),
				elems = elem.data('equal-height');

			if( $.inArray(elems, done) < 0 ) {
				resizeGroup('[data-equal-height="'+ elems +'"]');
				done.push(elems);
			}
		});
	}

	// Handles the actual resizing.
	function resizeGroup(selector) {
		var elems = $(selector);

		if(elems.length < 1) { return false; }

		var heights = [];

		elems.css('min-height', 0);
		elems.each(function() { heights.push($(this).outerHeight()); });

		// Get the highest value
		var highestCol = Math.max.apply(null, heights);

		// Set highest value to all elements
		elems.css('min-height', highestCol+'px');
	}


});

