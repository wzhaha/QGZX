//index.js
//获取应用实例
const app = getApp()

var isEmptyObject = function(e) {
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
    task_info_1: null,
    task_info_2: [{
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
  onLoad: function() {
    var that = this

    /**
     * 获取一周的值班表
     */
    if (!app.globalData.has_task_info_1) {
      wx.request({
        url: 'https://wz.oranme.com/getSecheduleById',
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
            app.globalData.has_task_info_1 = true
            app.globalData.task_info_1 = res.data
            if (res.data != "none") {
              that.setData({
                task_info_1: res.data
              })
            }
          } else {
            console.log("home.js wx.request CheckCallUser statusCode" + res.statusCode);
          }
        },
        fail: function(res) {
          console.log(res)
          console.log("index.js wx.request CheckCallUser fail");
        },
        complete: function() {
          // complete

        }
      })
    } else
      this.setData({
        task_info_1: app.globalData.task_info_1
      })
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  day_work: function() {

  },
  now_work: function() {

  },
  /**
   * 设置菜单栏点击变色
   */
  menu_bar: function(res) {
    console.log(res)
    this.setData({
      clickId: res.target.id
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 签到
   */
  sign: function(event) {
    wx.showToast({
      title: '签到成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  }
})