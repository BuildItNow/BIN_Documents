define(
	["welcome/client", "bin/core/util"],
	function(Client, util)
	{
		var Class = {};

		Class.vmData = 
		{
			requestResult:""
		}

		Class.vmMethod_sendRequest = function(type)
		{
			var self = this;
			var onRequestResult = function(data)
			{
				self.vm.requestResult = util.dump(data);
			}

			switch(type)
			{
				case "byData":
				{
					Client.apiByData(onRequestResult);
				}
				break;
				case "byFunc":
				{
					Client.apiByFunction(onRequestResult);
				}
				break;
				case "byFile":
				{
					Client.apiByFile(onRequestResult);
				}
				break;
			}
		}

		return bin.ui.NaviPageView.extend(Class);
	}
);