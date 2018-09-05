const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myinfo: null,
    gender: null,
    userinfo: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    this.setData({
      myinfo: app.globalData.userInfo
    })

    /**
     * 从服务器获取个人信息
     */
    if (!app.globalData.hasUserInfo_datail) {
      wx.request({
        url: 'https://wz.oranme.com/getUserInfoById',
        method: 'POST',
        data: {
          id: "16301133"
        },
        header: {
          'content-type': 'application/json'
        }, // 设置请求的 header
        success: function(res) {
          if (res.statusCode == 200) {
            console.log(res)
            app.globalData.hasUserInfo_datail = true
            app.globalData.userInfo_datail = res.data
            if (res.data != "none") {
              that.setData({
                userinfo: res.data
              })
            }
          } else {
            console.log("home.js wx.request CheckCallUser statusCode" + res.statusCode);
          }
        },
        complete: function() {
          // complete
        }
      })
    } else {
      this.setData({
        userinfo: app.globalData.userInfo_datail
      })
    }


    if (app.globalData.userInfo == null) {
      this.setData({
        gender: "未知"
      })
    } else if (app.globalData.userInfo.gender == 0)
      this.setData({
        gender: "女"
      })
    else
      this.setData({
        gender: "男"
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  }
})