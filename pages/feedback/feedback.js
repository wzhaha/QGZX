// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 20,
    focus: false,
    suggestion:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 提交
  bindFormSubmit: function(e) {
    console.log(e)
    var that=this
    that.setData({
      suggestion:null
    })
    if (e.detail.value.textarea){
      console.log(e.detail.value.textarea)
      wx.showToast({
        title: '感谢您的反馈',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    }
    else{
      wx.showToast({
        title: '请输入内容',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    }
  },
})