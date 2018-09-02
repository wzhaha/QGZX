const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myinfo: null,
    gender: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      myinfo: app.globalData.userInfo
    })
    if (app.globalData.userInfo.gender) {
      this.setData({
        gender: "男"
      })
    }
    else
      this.setData({
        gender: "女"
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})