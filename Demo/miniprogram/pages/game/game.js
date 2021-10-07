// pages/game/game.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    //弹框
    hiddenmodalput:true,

    inputValue: '',

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
     hiddenmodalput: true,  
     inputValue: '',
   });  
 },  
 //确认按钮
confirm: function(options){  
  //判断输入人数是否大于两人
  if (Number(this.data.inputValue)>=2){
    wx.navigateTo({
      url:'/pages/mulitplayer/mulitplayer?num='+this.data.inputValue,
    })
    this.setData({  
      hiddenmodalput: true,
      inputValue: '',
    })
  }
  
},

 input: function (options) {
   this.setData({
     inputValue: options.detail.value,
   })
 },

})

