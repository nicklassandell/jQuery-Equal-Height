# jQuery.equalHeight()

A simple, lightweight and responsive jQuery plugin for aligning the heights of a set of elements.

[Here's a working live demo of the plugin.](http://nicklassandell.bitbucket.org/jquery-equalheight/)

## Installation

Include the script *after* the jQuery library has loded:

    <script src="/path/to/jquery.equalHeight.js"></script>
        
The plugin requires jQuery 1.4 or higher.
    	
The plugin will run autmatically on `document.ready()`, see alternative options for enabling/disabling below.

## Usage

Applying the plugin is super easy. Each group of elements need an identifier that will be used to group the elements together. Example of a group:

    <div class="box" data-equal-height="example"></div>
    <div class="box" data-equal-height="example"></div>
    <div class="box" data-equal-height="example"></div>
    	
Example of multiple groups:

    <div class="box-1" data-equal-height="exampleOne"></div>
    <div class="box-1" data-equal-height="exampleOne"></div>
    <div class="box-1" data-equal-height="exampleOne"></div>
    
    <div class="box-2" data-equal-height="anotherExample"></div>
    <div class="box-2" data-equal-height="anotherExample"></div>
    <div class="box-2" data-equal-height="anotherExample"></div>
    	
You can manually disable and enable the plugin for different groups:

	// Disable
    jQuery('[data-equal-height="example"]').disableEqualHeight();
    
	// Enable
    jQuery('.box').equalHeight('identifier');
    
The `equalheight('identifier')` function will simply add the `data-equal-height="identifier"` attribute to a group of elements.

## Browser support

The plugin has been tested as far back as Internet Explorer 6, it Should Work <sup>tm</sup> in all standard web browsers.

## Found a bug?

Don't hesitate to throw me an issue, or even better make a pull request!