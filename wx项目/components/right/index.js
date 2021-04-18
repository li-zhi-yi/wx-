// components/right/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      menu:{
        type:Array
      },
      height:{
        type:Number
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
   //增加数量
    addNum:function(e){
      let id=e.currentTarget.dataset.id;
      this.dealNum(1,id)
      // this.data.menu.forEach((item,index)=>{
      //   if(item.id==id){
      //     console.log(item.num)
      //     let n=+item.num+1;
      //     console.log(n)
      //     this.setData({
      //       ['menu['+index+'].num']:n
      //     })
      //   }
      // })
    },
    //减少数量
    reduceNum:function(e){
      let id=e.currentTarget.dataset.id
      this.dealNum(-1,id)
    },
    //处理数据公用方法
    dealNum:function(num,id){
    
      this.data.menu.forEach((item,index)=>{
        if(item.id==id){
          // console.log(item,111)
          let n=+item.num+num;
          let price=+item.price;
          let img=item.img;
          let title=item.title
          if(n>=0){
            this.setData({
              ['menu['+index+'].num']:n
            })
            let result=this.data.arr.every((item,index)=>{
              return item.id!=id
            })
            // console.log(result)
            let arr=this.data.arr;
            if(result){
              arr.push({id:id,price:price,n:n,img:img,title:title})
              this.setData({
                arr
              })
            }else{
              arr.forEach((item,index)=>{
                if(item.id==id){
                  this.setData({
                    ['arr['+index+'].n']:n
                  })
                }
              })
            }
            // console.log(this.data.arr,11111)
            this.triggerEvent('getMsg',this.data.arr)
          }
        }
      })
    },
    
  }
})
