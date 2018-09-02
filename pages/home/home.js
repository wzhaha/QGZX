// pages/home/home.js

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

  },

  /**
   * 签到
   */
  sign: function (event) {
    wx.showToast({
      title: '签到成功',
      icon: 'succes',
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