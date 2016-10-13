define(["view!bin/common/statusView"], function(StatusView)
{
	var Class = {};

	Class.asyncPosGenHTML = function()
	{
		var max = bin.app.rem2px(12);
		var min = bin.app.rem2px(6);

		var w = this.$().width();
		if(w > max)
		{
			w = max;
			this.$().css("width", w+"px");
			
		}
		else if(w < min)
		{
			w = min;
			this.$().css("width", w+"px");
		}

		this.$().css({
			"bottom" : "-"+this.$().height()+"px",
			"left" : (bin.app.clientWidth()-w)*0.5+"px",
			"opacity" : 0
		});

		var self = this;
		
		this.$().animate(
		{
			bottom : (bin.app.rem2px(5)-this.$().height()*0.5)+"px",
			opacity : 1
		}, 100);

		setTimeout(function()
		{
			self.$().animate(
			{
				bottom : "-"+self.$().height()+"px",
				opacity : 0
			}, 100, function()
			{
				self.remove();
			});
		}, 2000);
	}

	return StatusView.extend(Class);
});