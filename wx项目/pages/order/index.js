// pages/order/index.js
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
  },
  navback:function(){
    wx.switchTab({
      url: '/pages/index/index',
      success:()=>{
        wx.showLoading({
          title: '加载中',
          success:()=>{
            setTimeout(()=>{
              wx.hideLoading({
                success: (res) => {
                  console.log(111)
                },
              })
            },1000)
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let fd=new Date()
    console.log(fd.getTime(),'time')
    wx.getSystemInfo({
      success: (result) => {
        let height=result.windowHeight*2;
        this.setData({
          height
        },()=>{
          // console.log(this.data.allArr,3333)
        })
      },
    })
    let allArr=allArr=getApp().globalData.allArr||[];//上个页面传递过来的数据;
    
    if(allArr.length){
      // console.log(allArr,333333333333333333)-
      this.setData({
        allArr
      },()=>{
        // console.log(this.data.allArr,3333)
      })
    }else{
      wx.showModal({
        title: '订单为空',
        success:(res)=>{
          if(res.confirm){
            wx.switchTab({
              url: '/pages/index/index',
              success:()=>{
                wx.showLoading({
                  title: '加载中',
                  success:()=>{
                    setTimeout(()=>{
                      wx.hideLoading({
                        success: (res) => {},
                      },1000)
                    })
                  }
                })
              }
            })
          }else{
            wx.switchTab({
              url: '/pages/me/index',
              success:()=>{
                wx.showLoading({
                  title: '加载中',
                  success:()=>{
                    setTimeout(()=>{
                      wx.hideLoading({
                        success: (res) => {},
                      })
                    },1000)
                  }
                })
              }
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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