// components/footer/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    price:{
      type:Number
    },
    allArr:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navgator:function(){
      if(this.data.price<=0){
        return wx.showModal({
          title:'请选择商品',
          success:function(res){
            if(res.confirm){
              wx.navigateTo({
                url: '/pages/index/index',
                success:()=>{
                  wx.showLoading({
                    title: '欢迎回来',
                    success:()=>{
                      setTimeout(()=>{
                        wx.hideLoading({
                          success: (res) => {
                            
                          },
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
      let list=JSON.stringify(this.data.allArr)
      // console.log(list,1111)
      wx.navigateTo({
        url: '/pages/buy/index?allArr='+list+"&"+"price="+this.data.price,
        success:(res)=>{
          wx.showLoading({
            title: '加载中....',
            success:()=>{
              setTimeout(()=>{
                wx.hideLoading({
                  success: (res) => {
                    
                  },
                })
              },1000)
            }
          })
        },
        fail:(res)=>{
          console.log(res)
        }
      })
    }
  }
})
