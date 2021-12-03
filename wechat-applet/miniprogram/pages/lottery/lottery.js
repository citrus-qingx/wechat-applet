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
    backgroundColor: "#92a4b0",
    fontColor: "white"
  },

  /**
   * button点击事件监听
   */
  clickButton: function(e) {
},

  /*复选框选中事件*/
  HandelItemChange(e){
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value;
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