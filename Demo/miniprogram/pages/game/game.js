// pages/game/game.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    //弹框
    hiddenmodalput:true,


    showUploadTip: false,
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },

  

//创建房间
creat:function(){
  wx.navigateTo({
     url:'/pages/room/room',
  })
},
//加入房间
join: function(){  
  this.setData({  
    hiddenmodalput: !this.data.hiddenmodalput
   })  
 },  
 //取消按钮  
 cancel: function(){  
   this.setData({  
     hiddenmodalput: true  
   });  
 },  
 //确认按钮
 confirm: function(){  
   this.setData({  
     hiddenmodalput: true  
   })  
 },


  jumpPage(e) {
    wx.navigateTo({
      url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
    })
  },

  onShareAppMessage: function () {
    return {
      title: '博饼',
      desc: '快来玩吧',
      path: '/page/user?id=123'
    }
  },

  onClickDatabase(powerList) {
    wx.showLoading({
      title: '',
    })
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.selectedEnv.envId
      },
      data: {
        type: 'createCollection'
      }
    }).then((resp) => {
      if (resp.result.success) {
        this.setData({
          haveCreateCollection: true
        })
      }
      this.setData({
        powerList
      })
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      this.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    })
  }
})

