// pages/game/game.js
App({
  onLaunch: function () {
    console.log("load");
    wx.setStorageSync('num', 0)
  }
})
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    //弹框
    hiddenmodalput:true,

    inputValue: '',
    inputShowed: false,
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
  let num = wx.getStorageSync('num');
  console.log(num);
  this.setData ({
    inputShowed:true,
  })
  if (num > 0) {
     console.log(num);
    wx.navigateTo({
      url:'/pages/mulitplayer/mulitplayer?num='+0,
    })
  } else {
    this.setData({  
      hiddenmodalput: false,
     })  
  }
  
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
  } else {
    wx.showToast({
      title: '人数需不少于两人！',
      icon: "none",
    })
  }
  
},

 input: function (options) {
   this.setData({
     inputValue: options.detail.value,
   })
 },

})

