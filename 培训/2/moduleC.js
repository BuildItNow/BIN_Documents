define(["moduleA", "moduleB"], function(moduleA, moduleB)
{
	var module = {};

	module.func = function()
	{
		moduleA.func();
		moduleB.func();

		console.log("Hello Module C");
	}

	return module;
});