// pages/buy/index.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.price){
      let allArr=JSON.parse(options.allArr);
      let price=options.price;
      // console.log(options,11111)
      this.setData({
        allArr,
        price
      },()=>{
        getApp().globalData.allArr= this.data.allArr;
        // console.log(this.data.allArr,88888)
      })
    }
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result.windowHeight)
        let height=result.windowHeight*2-100-250-100;
        this.setData({
          height
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  //付钱
  givemoney:function(){
    wx.showModal({
      title:"你确定支付"+this.data.price,
      success:(res)=>{
        //获取从1970到现在多少毫秒
        // let fd=Date.now()
        //获取随机字符串
        // let str=Math.random().toString(36).slice(0);
        // let str1=Math.random().toString(28).slice(4);
        // str=str1+str;
        // console.log(str,1111)
        // console.log(fd);
  
        if(res.confirm){
          wx.switchTab({
            url: '/pages/order/index',
            success:()=>{
              wx.showLoading({
                title: '加载中....',
                success:()=>{
                  setTimeout(()=>{
                    wx.hideLoading({
                      success: (res) => {},
                    })
                  },1000)
                }
              })
            },
            fail:(res)=>{
              console.log(res)
            }
          })
        }else{
          wx.switchTab({
            url: '/pages/index/index',
            success:()=>{
              console.log('sc')
            },
            fail:(res)=>{
              console.log(res)
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})