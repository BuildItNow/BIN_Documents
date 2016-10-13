(function()
{
	var config = {};
	var TURN_ON  = true;
	var TURN_OFF = false;

	var CASE = function(api, on, data, options)
	{
		if(on)
		{
			if(typeof(options) === "string")
			{
				options = {method:options};
			}

			config[api] = {data:data, options:options};
		}
	}

	var NET_DATA_GENERATOR = function(generator)
	{
		config._netDataGenerator = generator;
	}

	define(
	[],
	function()
	{
		// Start your config here

		NET_DATA_GENERATOR(function(data)
		{
			return {code:200, data:data};
		});

		CASE("/api/byFunction", TURN_ON, function(netParams)
			{
				return "api/byFunction : Welcome to BIN"
			},"GET");

		CASE("/api/byData", TURN_ON, "api/byData : Welcome to BIN", {method:"GET", costTime:1000});

		CASE("/api/byFile", TURN_ON, "file!./welcome/test.json", "POST");

		return config;
	});
}());