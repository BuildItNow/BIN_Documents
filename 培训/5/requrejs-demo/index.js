require.config(
{
	paths: 
	{
		jquery: '../jquery-2.2.4/dist/jquery',
		underscore: '../underscore-1.8.3/underscore',
		backbone: '../backbone-1.1.2/backbone',
	}
});

var DEMO = multiModuleDefineDemo;

require(["jquery", "backbone", "underscore"], function(jquery, backbone, underscore)
{
	window.$ = jquery;
	window.Backbone = Backbone;
	window._ = underscore;

	$(onReady);
});

function multiModuleDefineDemo()
{
	require(["multiModule"], function(module)
	{
		console.log("multiModule ==>");
		console.log(module);
	});
}

function onReady()
{
	DEMO();
}