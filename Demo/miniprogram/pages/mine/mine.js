// pages/mine/mine.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({

  data: {
    record: wx.getStorageSync('record'),

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
})
