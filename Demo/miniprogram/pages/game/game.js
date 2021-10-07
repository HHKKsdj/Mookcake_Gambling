// pages/game/game.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    //弹框
    hiddenmodalput:true,

    num: 5,

    showUploadTip: false,
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },

  

//单人模式
singleplayer:function(){
  wx.navigateTo({
     url:'/pages/singleplayer/singleplayer',
  })
},
//多人模式
//弹框
mulitplayer: function(){  
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
   wx.navigateTo({
    url:'/pages/mulitplayer/mulitplayer?num='+this.data.num,
 })
 },


  onShareAppMessage: function () {
    return {
      title: '博饼',
      desc: '快来玩吧',
      path: '/page/user?id=123'
    }
  },

})

