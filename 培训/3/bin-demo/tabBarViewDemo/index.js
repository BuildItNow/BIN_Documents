define(["bin/common/tabBarView"], function(TabBarView)
{
	var Class = {};

	Class.posGenHTML = function()
	{
		this._tabBarView = new TabBarView(
			{
				elem:this.$("#tabBar"),
				items : ["0", "1", "2", "3"],
				current : "0",
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
					// 页面切换操作
				}
			});
	}


	return bin.ui.NaviPageView.extend(Class);
});