// pages/mine/mine.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({

  data: {
    record: [0,0,0,0,0,0],
  },
  onLoad: function () {
    this.setData({
      record: wx.getStorageSync('record'),
    })
  },
  onShow: function () {
    this.setData({
      record: wx.getStorageSync('record'),
    })
  },

  delete: function () {
    let newRecord = [0,0,0,0,0,0];
      wx.setStorageSync('record', newRecord);
      this.setData({
      record: newRecord,
    })
  },
})
