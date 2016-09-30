define(
	["bin/common/refreshView"],
	function(RefreshView)
	{
		var Class = {};

		Class.posGenHTML = function()
		{
			var self = this;
			this._refreshView = new RefreshView({elem:this.$("#refreshView"), 
				autoRefresh:"animation",
				onRefresh:function(view)
				{
					setTimeout(function()
					{
						var r = Math.random();
						var f = false;
						if(r > 0.6)
						{
							view.$scrollerContent.html("Hello World");
						}
						else if(r > 0.3)
						{
							view.$scrollerContent.html("Welcome to BIN");
							f = true;
						}
						else
						{
							view.$scrollerContent.html("Hello BIN");
						}

						view.refreshDone(f);
					}, 1000);
				}
			});
		}

		Class.onRemove = function()
		{
			this._refreshView.remove();
		}

		return bin.ui.NaviPageView.extend(Class);
	}
);