/*
Script: PluginName.js
    PluginName

License:
	MIT-style license.

Copyright:
	Copyright (c) 2009 [copyright holders](http://).

*/
var PluginName = new Class({
	
	Implements: [Options, Events],
	
	options: {
		
	},
	
	initialize: function(options){
		this.setOptions(options);
		
		$$('p').setStyle('background','blue');
		
		this.fireEvent("initialize");
	}
	
});
