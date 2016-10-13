define([], function()
{
    var Class = {};

    Class.vmData = 
    {
        items:[],
        title:"",
    }

    Class.vmMethod_addItem=function()
    {
        this.vm.items.push({label:"ITEM "+this.vm.items.length});
    }

    Class.vmMethod_clearAll =function()
    {
        this.vm.items = [];
    }

    return bin.ui.NaviPageView.extend(Class);
})