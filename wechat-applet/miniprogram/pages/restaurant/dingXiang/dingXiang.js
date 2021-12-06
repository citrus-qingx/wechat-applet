Page({
    data: {
        backgroundColor: "#e7edf3",
        fontColor: "black",
        list:[],
        wait: "加载中...请稍候...",
        isLoading: true
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
                if(typeof(getApp().globalData.disableBusiness)==="undefined"){
                    getApp().globalData.disableBusiness=[[],[],[],[]];
                }
                var tmp = [];
                for(var i in res.data){
                    if(getApp().globalData.disableBusiness[3].indexOf(res.data[i].name)>-1){
                        tmp.push("true");
                    }else{
                        tmp.push("");
                    }
                }
                that.setData({
                    list:res.data,
                    checked:tmp,
                    isLoading:false
                })
           }
        });
    },

    checkboxChange:function(e){
        // if(typeof(getApp().globalData.disableBusiness)==="undefined"){
        //     getApp().globalData.disableBusiness=[];
        // }
        getApp().globalData.disableBusiness[3]=e.detail.value;
        // console.log(getApp().globalData.disableBusiness);
    }
})