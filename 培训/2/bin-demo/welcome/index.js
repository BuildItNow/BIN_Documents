define([], function()
{
	var Class = {};

	Class.posGenHTML = function()
	{
		this.$(".welcome-label").on("click", function()
		{
			bin.hudManager.showStatus("Welcome to BIN");
		});		
	}

	return bin.ui.View.extend(Class);
})
