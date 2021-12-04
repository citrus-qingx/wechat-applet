// miniprogram/pages/lottery/lottery.js
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:"丁香",
        value:"丁香"
      },
      {
        id:1,
        name:"海棠",
        value:"海棠"
      },
      {
        id:2,
        name:"竹园",
        value:"竹园"
      },
      {
        id:3,
        name:"综合楼",
        value:"综合楼"
      }
    ],
    checkedList:[],
    food:"yummy",
    interval:"",
    arr :[],
    flag: true,
    click: "今天吃什么呢 ？",
    backgroundColor: "#92a4b0",
    fontColor: "white"
  },

  /**
   * button点击事件监听
   */
  clickStartButton: function(e) {
    console.log("click");
    var that = this;
    var arr = ["yummy"];

    // 读入数据库数据
    const db = wx.cloud.database();
    const food = db.collection('food');
    const _ = db.command;
    food.where({
      // 在复选框选中范围中
      location:_.in(this.data.checkedList),
    })
    .field({
      _id:false,
      name:true
    })
    .get({
      success: function(res) {
        console.log(res.data);
        arr = res.data; //需修改
        that.setData({
          arr: arr
        })
      }
    })
  
    var flag = this.data.flag;
    console.log(flag);
    if(flag == true){
      flag = false;
    }else{
      flag = true;
    }
    this.setData({
      flag:flag
    })
    console.log(flag);

    if(flag == false){
        this.data.interval = setInterval(function(){
        console.log(flag);
        var num = Math.floor(Math.random()*that.data.arr.length);
        var food = that.data.arr[num].name;
        that.setData({
          food: food,
          click: "就吃这个吧 !"
        })
      },100)
    }else{
      console.log("clear");
      this.setData({
        click: "今天吃什么呢 ？"
      })
      clearInterval(this.data.interval);
    }
  },

  /**
   * 复选框选中事件
   * */
  HandelItemChange(e){
    // 获取被选中的复选框的值
    const checkedList = e.detail.value;
    this.setData({
      checkedList:checkedList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})