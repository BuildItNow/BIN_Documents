require.config(
{
	paths: 
	{
		jquery: '../jquery-2.2.4/dist/jquery',
		underscore: '../underscore-1.8.3/underscore',
		backbone: '../backbone-1.1.2/backbone',
	}
});

var DEMO = mvcDemo;

require(["jquery", "backbone", "underscore"], function(jquery, backbone, underscore)
{
	window.$ = jquery;
	window.Backbone = Backbone;
	window._ = underscore;

	$(onReady);
});

function eventsDemo()
{
	events = _.extend({}, Backbone.Events);

	events.on("NET_STATE_CHANGED", function(oldState, newState)
	{
		console.log("oldState ==>");
		console.log(oldState);

		console.log("newState ==>");
		console.log(newState);
	});
}

function routerDemo()
{
	var router = new (Backbone.Router.extend(
	{
		routes: 
		{
			"hello/*path(?*queryString)":"onHelloRoute",
			"*path(?*queryString)": "onRoute",
		},
		onRoute:function(path, queryString)
		{
			console.log("onRoute ==>");
			console.log(path);
			console.log(queryString);
		},
		onHelloRoute:function(path, queryString)
		{
			console.log("onHelloRoute ==>");
			console.log(path);
			console.log(queryString);
		}
	}));

	Backbone.history.start();
}

function mvcDemo()
{
	model = new Backbone.Model(
		{
			id:"hello",
		});

	view  = new (Backbone.View.extend(
	{
		events:
		{
			"input #helloInput":"onInput"
		},
		constructor:function(options)
		{
			var self = this;
			model.on("change:hello", function(model, value)
			{
				self.$("#helloLabel").html(value);
			});
			Backbone.View.prototype.constructor.call(this, options)
		},
		el:"body",
		promptHello:function() 
		{
		    var value = prompt("Please enter a message:");
		    model.set({hello: value});
		},
		onInput:function(e)
		{
			var val = $(e.currentTarget).val();
			model.set({hello: val});
		}
	}));

	view.render();

	view.promptHello();
}

function onReady()
{
	DEMO();
}