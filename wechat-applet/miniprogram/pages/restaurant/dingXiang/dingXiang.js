Page({
    data: {
        backgroundColor: "#e7edf3",
        fontColor: "black",
        list:[]
    },

    onLoad: function (options) {
        const db = wx.cloud.database();
        const food = db.collection('food');
        const _ = db.command;
        var that = this;
        food.where({
            location:"丁香"
        }).field({
            _id:false, name:true
        }).get({
            success: function(res) {
                that.setData({
                    list:res.data
                })
           }
        });
    },

    checkboxChange:function(e){
        if(typeof(getApp().globalData.disableBusiness)==="undefined"){
            getApp().globalData.disableBusiness=[];
        }
        getApp().globalData.disableBusiness[3]=e.detail.value;
        // console.log(getApp().globalData.disableBusiness);
    }
})