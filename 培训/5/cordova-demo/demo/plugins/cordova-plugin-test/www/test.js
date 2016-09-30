
    var defSuccess = function()
    {

    }

    var defError = function(error)
    {
        console.log(error);
    }

    var exec = require('cordova/exec');
    
    module.exports = 
    {
        helloCordova : function(success, error) 
        {
            exec(success || defSuccess, error || defError, "TestPlugin", "helloCordova", []);
        }
    };
