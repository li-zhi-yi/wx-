// components/left/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isshow:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeShow:function(e){
      // console.log(e.currentTarget.dataset.index)
      let num=e.currentTarget.dataset.index;
      this.setData({
        isshow:num
      })
      this.triggerEvent('msg',this.data.isshow)
      // console.log(this.data.isshow)
    }
  }
})
