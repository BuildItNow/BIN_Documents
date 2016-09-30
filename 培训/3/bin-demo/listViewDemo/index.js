define(
	["bin/common/listView"],
	function(ListView, View)
	{
		var Class = {};

		var ItemProvider = ListView.ItemProvider.extend(
		{
			createItemView:function(listView, i, data)
			{
				var v = new bin.ui.View({html:"<div class='list-view-item'>"+i+"</div>"})

				return v;
			}
		});

		Class.posGenHTML = function()
		{
			this._listView = new ListView({elem:this.$("#listView"), 
				itemProvider:new ItemProvider(), 
				dataProvider:new ListView.DataProvider(
					{
						loadAPI:function(params, success, error)
						{
							setTimeout(function()
							{
								var ret = {code:200, data:{}};
								var data = ret.data;

								if(params.page === 0)
								{
									data.total = 4*params.pageSize;
								}

								data.data = [];
								for(var i=0; i<params.pageSize; ++i)
								{
									data.data.push(i);
								}

								success(ret);
							}, 1000);
						}
					})});
		}

		return bin.ui.NaviPageView.extend(Class);
	}
);