define([], function()
{
    var Class = {};

    Class.vmMethod_vmDemo=function()
    {
        bin.naviController.push("welcome/vmDemo");
    }

    Class.vmMethod_mockDemo =function()
    {
        bin.naviController.push("welcome/mockDemo");
    }

    return bin.ui.NaviPageView.extend(Class);
})