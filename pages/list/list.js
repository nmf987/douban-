// pages/list/list.js
Page({
  data:{
    listData: {}
  },
  onLoad:function(options){
    var _self = this
    // // 页面初始化 options为页面跳转所带来的参数
    // wx.setNavigationBarTitle({
    //   title: options.title,
    //   success: function(res) {
    //     // success
    //   }
    // })

    try {
      var loadingData = wx.getStorageSync('loadingData')
      if (loadingData) {
        console.log(loadingData)
          _self.setData({
            listData: loadingData
          })
        }
      } catch (e) {
        // Do something when catch error
      }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})