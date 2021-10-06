// pages/room/room.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    one_img:'../../images/6-point.png',
    two_img: '../../images/6-point.png',
    three_img: '../../images/6-point.png',
    four_img:'../../images/6-point.png',
    five_img: '../../images/6-point.png',
    six_img: '../../images/6-point.png',

    timer:null,
    txt:'什么都没摇到',
    //图片的素材和效果图会发在最下面
    arr:[
      '../../images/1-point.png',
      '../../images/2-point.png',
      '../../images/3-point.png',
      '../../images/4-point.png',
      '../../images/5-point.png',
      '../../images/6-point.png',
    ],
    one:0,
    two:0,
    three:0,
    four:0,
    five:0,
    six:0,

  },

  begin:function(event){
    let obj = this;
    var point = [0,0,0,0,0,0];
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

        point : point,
        txt:obj.txt,
        
      })
    }, 100);
    setTimeout(() => {
      clearInterval(obj.data.timer);
      
      var point = [0,0,0,0,0,0];
      var result = "";

      point[obj.data.one]++;
      point[obj.data.two]++;
      point[obj.data.three]++;
      point[obj.data.four]++;
      point[obj.data.five]++;
      point[obj.data.six]++;

      if (point[3]==4) {
        if (point[0]==2) {
          result = "状元插金花";;
        } else {
          result = "四点红";
        }
      } else if (point[3]==6) {
        result = "满堂红";
      } else if (point[0]==6) {
        result = "遍地锦";
      } else if (point[1]==6&&point[2]==6&&point[4]==6&&point[5]==6) {
        result = "六勃黑";
      } else if (point[3]==5) {
        result = "五王";
      } else if (point[0]==5&&point[1]==5&&point[2]==5&&point[3]==5&&point[4]==5&&point[5]==5) {
        result = "五子";
      } else if (point[0]==1&&point[1]==1&&point[2]==1&&point[3]==1&&point[4]==1&&point[5]==1) {
        result = "对堂";
      } else if (point[3]==3) {
        result = "三红";
      } else if (point[0]==4&&point[1]==4&&point[2]==4&&point[4]==4&&point[5]==4) {
        result = "四进";
      } else if (point[3]==2) {
        result = "二举";
      } else if (point[3]==1) {
        result = "一秀";
      } else {
        result = "什么都没摇到";
      }
      obj.setData({
        txt : result,
      })
    }, 1500);
    /*
    if(obj.data.flag==true){
       
    }else{
      clearInterval(obj.data.timer);
      obj.setData({
         //one_img: obj.data.arr[5],
         //two_img: obj.data.arr[5],
         //three_img: obj.data.arr[5],
           msg:'摇一摇',
           flag:true,
           txt:'恭喜你摇到了:'+obj.data.total,
      })
    }
    */
  },

})