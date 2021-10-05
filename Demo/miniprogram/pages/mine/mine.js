// pages/mine/mine.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },
  

})
