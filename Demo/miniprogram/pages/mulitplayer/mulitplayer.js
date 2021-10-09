// pages/mulitplayer/mulitplayer.js

var num = [0, 0, 0, 0, 0, 0];
var oldNum = [0,0,0,0,0,0];
var players = [];
var index = 0;
var totalNum = [0,0,0,0,0,0];
Page({
  onLoad: function (options) {
    console.log(options);
    this.setData({
      num: Number(options.num),
    })
    if (this.data.num != 0){
      wx.setStorageSync('num', this.data.num);
    }
    
    for (var i = 0; i < this.data.num; i++) {
      players.push({
        name: "user" + i,
        record: [0, 0, 0, 0, 0, 0]
      })
    }
    this.setData({
      player: players,
    })
  },
  

  onShow: function () {
    var tot = this.data.total;
    let player = this.data.player;
    for (var i=0;i<this.data.num;i++) {
      for (var j=0;j<6;j++){
        tot[j] += player[i].record[j];
      }
    }
    this.setData ({
      total: tot,
      index: index+1,
    })
    console.log(this.data.index)
  },


  data: {
    player: [],
    total:[0,0,0,0,0,0],

    one_img: '../../images/6-point.png',
    two_img: '../../images/6-point.png',
    three_img: '../../images/6-point.png',
    four_img: '../../images/6-point.png',
    five_img: '../../images/6-point.png',
    six_img: '../../images/6-point.png',

    timer: null,
    txt: '什么都没摇到',
    flag: true,

    num: 0,

    arr: [
      '../../images/1-point.png',
      '../../images/2-point.png',
      '../../images/3-point.png',
      '../../images/4-point.png',
      '../../images/5-point.png',
      '../../images/6-point.png',
    ],
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,

    index:1,
  },

  begin: function (event) {
    let obj = this;
    var point = [0, 0, 0, 0, 0, 0];
    let f = obj.data.flag;
    if (f == true) {
      obj.data.timer = setInterval(function () {

        let one = Math.floor(Math.random() * 6);
        let two = Math.floor(Math.random() * 6);
        let three = Math.floor(Math.random() * 6);
        let four = Math.floor(Math.random() * 6);
        let five = Math.floor(Math.random() * 6);
        let six = Math.floor(Math.random() * 6);

        obj.setData({
          one_img: obj.data.arr[one],
          two_img: obj.data.arr[two],
          three_img: obj.data.arr[three],
          four_img: obj.data.arr[four],
          five_img: obj.data.arr[five],
          six_img: obj.data.arr[six],

          one: one,
          two: two,
          three: three,
          four: four,
          five: five,
          six: six,

          flag: false,
          point: point,
          txt: obj.txt,
        })
      }, 100);
    }

    setTimeout(() => {
      clearInterval(obj.data.timer);
      var point = [0, 0, 0, 0, 0, 0];
      var result = "";

      point[obj.data.one]++;
      point[obj.data.two]++;
      point[obj.data.three]++;
      point[obj.data.four]++;
      point[obj.data.five]++;
      point[obj.data.six]++;

      if (point[3] == 4) {
        if (point[0] == 2) {
          result = "状元插金花";
          num[5] = num[5] + 1;
        } else {
          result = "状元";
          num[5] = num[5] + 1;
        }
      } else if (point[3] == 6) {
        result = "满堂红";
        num[5] = num[5] + 1;
      } else if (point[0] == 6) {
        result = "遍地锦";
        num[5] = num[5] + 1;
      } else if (point[1] == 6 && point[2] == 6 && point[4] == 6 && point[5] == 6) {
        result = "六勃黑";
        num[5] = num[5] + 1;
      } else if (point[3] == 5) {
        result = "五王";
        num[5] = num[5] + 1;
      } else if (point[0] == 5 && point[1] == 5 && point[2] == 5 && point[3] == 5 && point[4] == 5 && point[5] == 5) {
        result = "五子";
        num[5] = num[5] + 1;
      } else if (point[0] == 1 && point[1] == 1 && point[2] == 1 && point[3] == 1 && point[4] == 1 && point[5] == 1) {
        result = "对堂";
        num[4] = num[4] + 1;
      } else if (point[3] == 3) {
        result = "三红";
        num[3] = num[3] + 1;
      } else if (point[0] == 4 && point[1] == 4 && point[2] == 4 && point[4] == 4 && point[5] == 4) {
        result = "四进";
        num[2] = num[2] + 1;
      } else if (point[3] == 2) {
        result = "二举";
        num[1] = num[1] + 1;
      } else if (point[3] == 1) {
        result = "一秀";
        num[0] = num[0] + 1;
      } else {
        result = "什么都没摇到";
      }

      for (var i=0;i<6;i++){
        totalNum[i] += num[i];
      }

      obj.setData({
        txt: result,
        flag: true,
        total: totalNum,
      })
      oldNum = players[index].record;
      console.log(index);
      console.log(oldNum);
      for (var i=0;i<6;i++) {
          num[i]+=oldNum[i];
      }

      players[index] = {
        name: "user" + index,
        record: num
      };
      num = [0, 0, 0, 0, 0, 0];
      

      if (index == this.data.num-1) {
        index = 0;
      } else {
        index++;
      }
      
      obj.setData({
        player: players,
        index: index+1,
      })

      console.log(this.data.player);
    }, 1000);

  },

  end: function () {
    wx.showModal({
      title: '提示',
      content: '是否结束博饼？',
      success: function(res) {
      if (res.confirm) {
        wx.setStorageSync('num', 0);
        wx.navigateBack({
          url:'/pages/game/game'
        })
    
        num = [0, 0, 0, 0, 0, 0];
        oldNum = [0,0,0,0,0,0];
        players = [];
        index = 0;
        totalNum = [0,0,0,0,0,0];
        this.setData({
          player:players,
          num:0,
          total:totalNum,
          index:1,
        })
      } else if (res.cancel) {
      
      }
      }
    })
    
  },
})