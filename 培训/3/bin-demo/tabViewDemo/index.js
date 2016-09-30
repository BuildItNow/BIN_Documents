define(["bin/common/tabView"], function(TabView)
{
	var Class = {};

	Class.posGenHTML = function()
	{
		this._tabView = new TabView(
			{
				elem:this.$("#tab"),
				tabBarID:this.$("#tabBar"),
				swipeID:this.$("#swipeViewContainer"),
				items : ["0", "1", "2", "3"],
				current : "2",
				activeStyle:function(elem)
				{
					elem.css("color", "#4ebd59");		
				},
				deactiveStyle:function(elem)
				{
					elem.css("color", "black");
				},
				onChange:function(view, item)
				{
					bin.hudManager.showStatus(item);

					view.$("#tabItemActiveLine").css("left", 25*parseInt(item)+"%");
				}
			});
	}
	return bin.ui.NaviPageView.extend(Class);
});