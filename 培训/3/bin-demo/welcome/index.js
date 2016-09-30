define([], function()
{
	var hudConfig = 
	[
		"status",
		"alert",
		"datepicker",
		"select",
		"indicator",
	]

	var componentConfig = 
	[
		{
			title:"tabBarView",
			path:"tabBarViewDemo/index",
		},
		{
			title:"swipeView",
			path:"swipeViewDemo/index",
		},
		{
			title:"tabView",
			path:"tabViewDemo/index",
		},
		{
			title:"refreshView",
			path:"refreshViewDemo/index",
		},
		{
			title:"listView",
			path:"listViewDemo/index",
		}
	]

	var Class = {};

	Class.events = 
	{
		"click .hud-menu-item" : "hudMenuClick",
		"click .component-menu-item" : "componentMenuClick"
	}

	Class.constructor = function(options)
	{
		console.log("constructor");
		this.__$super.prototype.constructor.call(this, options);
	}

	Class.genHTML = function()
	{
		console.log("genHTML");
		this.$html("#loginView")

		this.__$super.prototype.genHTML.call(this);
	}

	Class.posGenHTML = function()
	{
		console.log("posGenHTML");

		var huds = this.$("#huds");
		for(var i=0,i_sz=hudConfig.length; i<i_sz; ++i)
		{
			if(i>0)
			{
				huds.append("<div class='Welcome-menu-item-top-line'></div>")
			}
			huds.append("<div class='hud-menu-item Welcome-menu-item' id='"+hudConfig[i]+"''>"+hudConfig[i]+"</div>")
		}

		var components = this.$("#components");
		for(var i=0,i_sz=componentConfig.length; i<i_sz; ++i)
		{
			if(i>0)
			{
				components.append("<div class='Welcome-menu-item-top-line'></div>")
			}
			components.append("<div class='component-menu-item Welcome-menu-item' id='"+componentConfig[i].path+"''>"+componentConfig[i].title+"</div>")
		}


		this.__$super.prototype.posGenHTML.call(this);
	}

	Class.asyncPosGenHTML = function()
	{
		console.log("asyncPosGenHTML");
		this.__$super.prototype.posGenHTML.call(this);
	}

	Class.onShow = function()
	{
		console.log("onShow");
		this.__$super.prototype.onShow.call(this);
	}

	Class.onHide = function()
	{
		console.log("onHide");
		this.__$super.prototype.onHide.call(this);
	}

	Class.onRemove = function()
	{
		console.log("onRemove");
		this.__$super.prototype.onRemove.call(this);
	}

	Class.hudMenuClick = function(e)
	{
		var id = e.currentTarget.id;

		switch(id)
		{
			case "status":
			{
				bin.hudManager.showStatus("新密码不能为空");
			}
			break;
			case "alert":
			{
				bin.hudManager.alert(
				{				
					message:{text:"确定退出程序?"},				
					buttons:[
						{
							text:"确定",
							onClick:function(v)
							{
								v.close();
								bin.hudManager.showStatus("您选择了确定");
							}
						},					
						{text:"取消"},					
					]
				});

			}
			break;
			case "datepicker":
			{
				bin.hudManager.datePicker({					
					yearBeg: 2015,					
					yearEnd: 2017,					
					date: "2016-01-01",
					onPick: function(date) 
					{							  		
						bin.hudManager.showStatus(date.strDate);	
					}				
				});

			}
			break;
			case "select":
			{
				bin.hudManager.select({
					options: [{text:"Option 0", value:0}, {text:"Option 1", value:1}, {text:"Option 2", value:2}],
					current: 1, 
					callback: function(data)
					{
						bin.hudManager.showStatus(data.text);	
					}
				});
			}
			break;
			case "indicator":
			{
				var indicator = bin.hudManager.startIndicator({model:true});
				setTimeout(function()
				{
					bin.hudManager.stopIndicator(indicator);
				}, 1000);
			}
			break;
		}
	}

	Class.componentMenuClick = function(e)
	{
		var path = e.currentTarget.id;

		bin.naviController.push(path);
	}

	return bin.ui.NaviPageView.extend(Class);
})
