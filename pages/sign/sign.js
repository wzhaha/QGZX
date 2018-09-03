// pages/sign/sign.js

//获取应用实例
const app = getApp()

var isEmptyObject = function (e) {
  var temp;
  for (temp in e)
    return !1;
  return !0
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    location: {},
    hasLocation:false,
    accurate: 0.01
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.location) {
      this.setData({
        location: app.globalData.location,
        hasLocation: true
      })
    }else{
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
          app.globalData.location = res
        }
      })
    }
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

  },

  /**
 * 签入
 */
  checkin: function (event) {
    if (39.95933 - this.data.accurate < this.data.location.latitude < 39.95933 + this.data.accurate && 116.29845 - this.data.accurate < this.data.location.longitude < 116.29845 + this.data.accurate) {
      wx.showToast({
        title: '签入成功',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    }
    else
      wx.showToast({
        title: '位置错误',
        icon: 'success',
        duration: 1000,
        mask: true
      })
  },

  /**
* 签出
*/
  checkout: function (event) {
    console.log(location)
    if (39.95933 - this.data.accurate < this.data.location.latitude < 39.95933 + this.data.accurate && 116.29845 - this.data.ccurate < this.data.location.longitude < 116.29845 + this.data.accurate) {
      wx.showToast({
        title: '签出成功',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    }
    else
      wx.showToast({
        title: '位置错误',
        icon: 'success',
        duration: 1000,
        mask: true
      })
  },

  /**
 * 请假
 */
  leave: function (event) {
    wx.showToast({
      title: '已发送请假请求',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  }
})