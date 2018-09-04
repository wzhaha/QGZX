//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        //判断是否授权，如果授权成功
        if (res.authSetting['scope.userInfo']) {
          //获取用户信息
          wx.getUserInfo({
            success: res => {
              console.log(res);
              this.globalData.userInfo = res.userInfo
              //网络延迟，回调函数
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          //如果授权不成功,进行授权
          wx.authorize({
            scope: 'scope.userInfo',
            success(res) {
              //获取用户信息
              wx.getUserInfo({
                success: res => {
                  console.log(res);
                  this.globalData.userInfo = res.userInfo
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    location:null,
    day_schedule:null
  }
})