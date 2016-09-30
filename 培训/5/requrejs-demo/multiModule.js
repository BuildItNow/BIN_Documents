define("moduleA", [], function()
{
	var Class = {};

	Class.func = function()
	{
		console.log("Module A");
	}

	return Class;
});

define("moduleB", [], function()
{
	var Class = {};

	Class.func = function()
	{
		console.log("Module B");
	}

	return Class;
});

