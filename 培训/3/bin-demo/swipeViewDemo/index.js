define(["bin/common/swipeView"], function(SwipeView)
{
	var Class = {};

	Class.posGenHTML = function()
	{
		this._swipeView = new SwipeView(
		{
			elem:this.$("#swipeViewContainer"),
			current:2,
			onChange:function(view, index)
			{
				bin.hudManager.showStatus(index);
				// 页面切换操作
			}
		});
	}


	return bin.ui.NaviPageView.extend(Class);
});