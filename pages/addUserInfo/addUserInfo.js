const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  bindFormSubmit: function(e) {
    console.log(e)
    if (e.detail.value.studentid.length != 8 || e.detail.value.mobile.length != 11) {
      wx.showToast({
        title: '格式错误',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    } else {
      //展示本地存储能力

      try {
        wx.setStorageSync('id', '16301133')
      } catch (e) {}
      wx.showModal({
        title: '提示',
        content: '确认提交个人信息',
        success: function(res) {
          if (res.confirm) {
            app.globalData.hasStudentId = true
            app.globalData.studentId = e.detail.value.studentid
            wx.navigateTo({
              url: '../userinfo/userinfo'
            })
          } else if (res.cancel) {

          }
        }
      })
      //提交到服务器完善信息
      console.log(app.globalData.has_day_schedule)
      console.log(app.globalData.hasStudentId)
    }
  }


})