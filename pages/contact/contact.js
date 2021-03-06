// pages/contact/contact.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contact_info: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    /**
     * 从服务器获取个人信息
     */
    if (!app.globalData.has_contact_info) {
      wx.request({
        url: 'https://wz.oranme.com/getContact',
        method: 'GET',
        header: {
          'content-type': 'application/json'
        }, // 设置请求的 header
        success: function(res) {
          if (res.statusCode == 200) {
            console.log(res)
            app.globalData.has_contact_info = true
            app.globalData.contact_info = res.data
            if (res.data != "none") {
              that.setData({
                contact_info: res.data
              })
            }
          } else {
            console.log("home.js wx.request CheckCallUser statusCode" + res.statusCode);
          }
        },
        fail: function() {
          console.log("index.js wx.request CheckCallUser fail");
        },
        complete: function() {
          // complete
        }
      })
    } else
      this.setData({
        contact_info: app.globalData.contact_info
      })
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

  }
})