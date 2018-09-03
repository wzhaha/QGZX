//index.js
//获取应用实例
const app = getApp()

var isEmptyObject = function (e) {
  var temp;
  for (temp in e)
    return !1;
  return !0
}

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    menu_tab: ["本周值班", "当前值班"],
    clickId: 0,
    task_info_1: [
      {
        week: 1,
        period: 3,
        position: "YF704",
        status: 2,
      },
      {
        week: 3,
        period: 2,
        position: "YF814",
        status: 1,
      },
      {
        week: 4,
        period: 1,
        position: "YF812",
        status: 0,
      },
    ],
    task_info_2: [
      {
        name: "王志",
        status: "已签",
      },
      {
        name: "辛鹏起",
        status: "已签",
      },
      {
        name: "汤泓敏",
        status: "未签",
      },
    ],
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
      })
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  day_work: function () {

  },
  now_work: function () {

  },
  /**
   * 设置菜单栏点击变色
   */
  menu_bar: function (res) {
    console.log(res)
    this.setData({
      clickId: res.target.id
    })
  },

  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  },
  
  /**
   * 签到
   */
  sign:function(event){
    wx.showToast({
      title: '签到成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  }
})
