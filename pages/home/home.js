// pages/home/home.js

//获取应用实例
const app = getApp()

var isEmptyObject = function(e) {
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
    day_schedule: null,
    clickCardId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /**
     * 丛缓存中获取学号
     */
    try {
      var studentid = wx.getStorageSync('id')
      if (studentid) {
        app.globalData.hasStudentId = true
        app.globalData.studentId = studentid
        // Do something with return value
      }
      else {
        app.globalData.hasStudentId = false
      }
    } catch (e) {
      // Do something when catch error
    }

    console.log(app.globalData.hasStudentId)
    var that = this
    /**
     * 没有地理位置的时候
     */
    if (!app.globalData.location) {
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
          app.globalData.location = res
        }
      })
    }
    /**
     * 从服务器获取个人信息
     */
    if (!app.globalData.has_day_schedule) {
      wx.request({
        url: 'https://wz.oranme.com/getDaySchedule',
        method: 'POST',
        data: {
          id: app.globalData.studentId
        },
        header: {
          'content-type': 'application/json'
        }, // 设置请求的 header
        success: function(res) {
          if (res.statusCode == 200) {
            console.log(res)
            app.globalData.day_schedule = res.data
            app.globalData.has_day_schedule = true
            if (res.data != "none") {
              that.setData({
                day_schedule: res.data
              })
            }
          } else {
            console.log("home.js wx.request CheckCallUser statusCode" + res.statusCode);
          }
        },
      })
    } else
      this.setData({
        day_schedule: app.globalData.day_schedule
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    if (!app.globalData.hasStudentId){
      wx.navigateTo({
        url: '../addUserInfo/addUserInfo'
      })
    }
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 点击卡片
   */
  onCardClick: function(event) {
    console.log(event)
    this.setData({
      clickCardId: event.currentTarget.id
    })
    wx.navigateTo({
      url: '../sign/sign?index=' + this.data.clickCardId
    })
    console.log(this.data.day_schedule[0])
  }
})