
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentid:null,
    mobile:null,
    showModal: false,
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
      wx.showModal({
        title: '提示',
        content: '确认提交个人信息',
        success: function(res) {
          if (res.confirm) {
            app.globalData.hasStudentId = true
            app.globalData.studentId = e.detail.value.studentid
            try {
              wx.setStorageSync('id', e.detail.value.studentid)
            } catch (e) { }

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
  },

  idInput:function(e){
    this.setData({
      studentid: e.detail.value
    })
  },

  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },

  commit:function(e){
    if (this.data.studentid.length != 8 || this.data.mobile.length != 11) {
      wx.showToast({
        title: '格式错误',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    }
    else{
      wx.navigateTo({
        url: '../myModal/myModal'
      })
    }
  },

  /**
 * 弹窗
 */
  showDialogBtn: function () {
    if (this.data.studentid.length != 8 || this.data.mobile.length != 11) {
      wx.showToast({
        title: '格式错误',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
    }
    else{
      this.setData({
        showModal: true
      })
    }
  },

  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    app.globalData.hasStudentId = true
    app.globalData.studentId = this.data.studentid
    try {
      wx.setStorageSync('id', this.data.studentid)
    } catch (e) { }
    console.log(this.data.studentid)
    wx.switchTab({
      url: '../home/home'
    })
   // this.hideModal();
  }

})