// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isave:false,
    // 总价
    price:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求数据
    wx.request({
      url: 'http://localhost/data/list.json',
      success:({data})=>{
        // console.log(data)
        if(data.errno==0){
            let result=data.data
            let menu=result.map((item,index)=>{
              return {id:item.id,text:item.text}
            })
            //默认选中第一项
            let choose=result[0].id
            // console.log(choose,222)
            // console.log(result,'result')
            // 存储数据
            this.setData({
              menu,
              result,
              choose
            })

            //获取食物列表的星系
            let product=result.filter((item,index)=>{
              if(item.id===this.data.choose){
                return true;
              }
            })
            product=product[0].data
            // console.log(product,133)
            //更新第一列获得的列表
            this.setData({
              product
            })
            // 获取视口高度/宽度
            wx.getSystemInfo({
              success: (result) => {
                // console.log(result.windowHeight)
                let  height=result.windowHeight*2-250;
                // console.log(height,111)
                //存储页面视口高度
                this.setData({
                  height
                })
              },
            })
        }else{
          wx.showModal({
            title:'获取数据失败',
            success:(res)=>{
              if(res.confirm){
                // console.log(true)
              }else{
                // console.log(false)
              }
            }
          })
        }
      }
    })
  },
  // receivemsg:function(e){
  //   console.log(e.detail);
  //   wx.request({
  //     url: 'http://localhost/data/list.json',
  //     success:({data})=>{
  //       let menu=data.data[e.detail].data;
  //       this.setData({
  //         menu
  //       })
  //        console.log(this.data.menu)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //更新数据 getShop
    this.setData({
      getShop:true
    })
  },

  //接受子组件传递过来的选中数据
  changeShow:function(e){
    // console.log(e.detail)
     //获取食物列表的星系
     let product=this.data.result.filter((item,index)=>{
      if(item.id===e.detail){
        return true;
      }
    })
    product=product[0].data;
    // console.log(product,51)
    this.setData({
      choose:e.detail,
      product
    })
    // console.log(this.data.product,2222)
  } 
  ,
  //获取foot传递过来的信息
  getFoot:function(){

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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.disableAlertBeforeUnload({
      success:(e)=>{
    
      },
      fail:(e)=>{
        console.log(e)
      }
    })
  },
  getMsg:function(e){
    // console.log(e.detail)
    let allArr=e.detail;
    let price=0;
    this.dealPrice(allArr,price)
  },
  //处理购物车价格
  dealPrice:function(allArr,price){
    allArr.forEach((item,index)=>{
      price+=+(item.n)*(item.price)
    })
    // console.log(price)
    //更新数据
    this.setData({
      price,
      allArr
    },()=>{
      this.data.allArr.forEach((item,index)=>{
        // console.log(item)
      })
    })
   
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