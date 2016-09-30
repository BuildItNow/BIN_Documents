define(["bin/core/spaApplication"], function(SPAApplication)
{
	var Class = {};
	Class.init = function()
	{
		SPAApplication.prototype.init.call(this);

		console.log("Demo init");
	}
	Class.run = function()
	{
		SPAApplication.prototype.run.call(this);

		console.log("Demo run");

		bin.naviController.startWith("welcome/index");
	}
	Class.exit = function()
	{
		SPAApplication.prototype.exit.call(this);
		console.log("Demo exit");
	}
	return SPAApplication.extend(Class);
});